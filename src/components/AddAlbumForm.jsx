import { useState } from 'react';
import axios from 'axios';
import './../css/AddAlbumForm.css';

const AddAlbumForm = ({ onAlbumAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    description: '',
    type: 'Mini Album',
    tracks: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (!validateForm()) {
      setSubmitStatus('Please fix the errors below');
      return;
    }

    setIsSubmitting(true);

    try {
      const tracksArray = formData.tracks
        .split('\n')
        .map(track => track.trim())
        .filter(track => track.length > 0);

      //data for server
      const albumData = {
        title: formData.title,
        releaseDate: formData.releaseDate,
        description: formData.description,
        type: formData.type,
        tracks: tracksArray
      };

      // Send POST request
      const response = await axios.post(`${SERVER_URL}/api/albums`, albumData);

      if (response.data.success) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          title: '',
          releaseDate: '',
          description: '',
          type: 'Mini Album',
          tracks: ''
        });
        // refresh list
        if (onAlbumAdded) {
          onAlbumAdded(response.data.album);
        }
      }
    } catch (error) {
      console.error('Error adding album:', error);
      if (error.response && error.response.data) {
        setSubmitStatus(`Error: ${error.response.data.message}`);
      } else {
        setSubmitStatus('Error: Failed to add album. Please try again.');
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
            />
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
            rows="4"
            placeholder="Describe the album (10-500 characters)"
          />
          <span className="char-count">
            {formData.description.length}/500 characters
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="tracks">Tracks * (one per line)</label>
          <textarea
            id="tracks"
            name="tracks"
            rows="6"
            placeholder="Track 1&#10;Track 2&#10;Track 3"
          />
          {errors.tracks && <span className="error-message">{errors.tracks}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Adding Album...' : 'Add Album'}
        </button>

        {submitStatus && (
          <div className={`submit-message ${submitStatus === 'success' ? 'success' : 'error'}`}>
            {submitStatus === 'success' 
              ? '✓ Album added successfully!' 
              : submitStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddAlbumForm;