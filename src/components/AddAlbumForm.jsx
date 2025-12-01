import { useState } from 'react';
import axios from 'axios';
import './../css/AddAlbumForm.css';

const AddAlbumForm = ({ onAlbumAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    description: '',
    type: 'Mini Album',
    tracks: '',
    img: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const SERVER_URL = 'https://straykids-server-2.onrender.com'; 

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be 100 characters or less';
    }

    if (!formData.releaseDate) {
      newErrors.releaseDate = 'Release date is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    } else if (formData.description.length > 500) {
      newErrors.description = 'Description must be 500 characters or less';
    }

    const validTypes = ['Mini Album', 'Studio Album', 'Single', 'EP'];
    if (!validTypes.includes(formData.type)) {
      newErrors.type = 'Invalid album type';
    }

    if (!formData.tracks.trim()) {
      newErrors.tracks = 'At least one track is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        img: file
      }));
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fix the errors below');
      return;
    }

    setIsSubmitting(true);

    try {
      const tracksArray = formData.tracks
        .split('\n')
        .map(track => track.trim())
        .filter(track => track.length > 0);

      // Use FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('releaseDate', formData.releaseDate);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('tracks', JSON.stringify(tracksArray));
      
      if (formData.img) {
        formDataToSend.append('img', formData.img);
      }

      const response = await axios.post(`${SERVER_URL}/api/albums`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setFormData({
          title: '',
          releaseDate: '',
          description: '',
          type: 'Mini Album',
          tracks: '',
          img: null
        });
        setImagePreview(null);
        
        if (onAlbumAdded) {
          onAlbumAdded(response.data.album);
        }
      }
    } catch (error) {
      console.error('Error adding album:', error);
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('Error: Failed to add album. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-album-form-container">
      <h3>Add New Album</h3>
      <form onSubmit={handleSubmit} className="add-album-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Album Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="releaseDate">Release Date *</label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className={errors.releaseDate ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.releaseDate && <span className="error-message">{errors.releaseDate}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="type">Album Type *</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="Mini Album">Mini Album</option>
            <option value="Studio Album">Studio Album</option>
            <option value="Single">Single</option>
            <option value="EP">EP</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="img">Album Cover Image</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleImageChange}
            disabled={isSubmitting}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the album (10-500 characters)"
            className={errors.description ? 'error' : ''}
            disabled={isSubmitting}
          />
          <span className="char-count">
            {formData.description.length}/500 characters
          </span>
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="tracks">Tracks * (one per line)</label>
          <textarea
            id="tracks"
            name="tracks"
            value={formData.tracks}
            onChange={handleChange}
            rows="6"
            placeholder="Track 1&#10;Track 2&#10;Track 3"
            className={errors.tracks ? 'error' : ''}
            disabled={isSubmitting}
          />
          {errors.tracks && <span className="error-message">{errors.tracks}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Adding Album...' : 'Add Album'}
        </button>
      </form>
    </div>
  );
};

export default AddAlbumForm;