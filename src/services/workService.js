import api from './api';

/**
 * Work Service - Handles all work-related API calls
 */

// Get work details by ID
export const getWork = async (id) => {
  try {
    const response = await api.get(`/api/work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get work details' };
  }
};

// Create new work
export const createWork = async (workData) => {
  try {
    const response = await api.post('/api/work', workData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create work' };
  }
};

// Update work details
export const updateWork = async (id, workData) => {
  try {
    const response = await api.put(`/api/work/${id}`, workData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update work' };
  }
};

// Delete work
export const deleteWork = async (id) => {
  try {
    const response = await api.delete(`/api/work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete work' };
  }
};

// Get work history
export const getWorkHistory = async (id) => {
  try {
    const response = await api.get(`/api/work/history/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get work history' };
  }
};

// Get work status
export const getWorkStatus = async (id) => {
  try {
    const response = await api.get(`/api/work/status/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get work status' };
  }
};

// Upload work files
export const uploadWorkFiles = async (id, formData) => {
  try {
    const response = await api.post(`/api/work/upload/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to upload work files' };
  }
};

// Download work files
export const downloadWorkFiles = async (id) => {
  try {
    const response = await api.get(`/api/work/download/${id}`, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to download work files' };
  }
};

export default {
  getWork,
  createWork,
  updateWork,
  deleteWork,
  getWorkHistory,
  getWorkStatus,
  uploadWorkFiles,
  downloadWorkFiles
}; 