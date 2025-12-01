import { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/AddAlbumForm.css'; 

const EditAlbumForm = ({ album, onAlbumUpdated, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    description: '',
    type: 'Mini Album',
    tracks: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVER_URL = 'https://straykids-server-2.onrender.com';

  useEffect(() => {
    if (album) {
      setFormData({
        title: album.title,
        releaseDate: album.releaseDate,
        description: album.description,
        type: album.type,
        tracks: Array.isArray(album.tracks) ? album.tracks.join('\n') : ''
      });
    }
  }, [album]);

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

      const albumData = {
        title: formData.title,
        releaseDate: formData.releaseDate,
        description: formData.description,
        type: formData.type,
        tracks: tracksArray
      };

      const response = await axios.put(
        `${SERVER_URL}/api/albums/${album._id}`, 
        albumData
      );

      if (response.data.success) {
        if (onAlbumUpdated) {
          onAlbumUpdated(response.data.album);
        }
      }
    } catch (error) {
      console.error('Error updating album:', error);
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('Error: Failed to update album. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-album-form-container">
      <h3>Edit Album</h3>
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

        <div className="button-group">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Updating Album...' : 'Update Album'}
          </button>
          <button 
            type="button" 
            className="cancel-btn" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAlbumForm;