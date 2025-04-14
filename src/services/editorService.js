import api from './api';

/**
 * Editor Service - Handles all editor-related API calls
 */

// Get editor profile
export const getEditor = async (id) => {
  try {
    const response = await api.get(`/api/editor/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get editor profile' };
  }
};

// Get assigned work for an editor
export const getAssignedWork = async (id) => {
  try {
    const response = await api.get(`/api/editor/assignwork/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get assigned work' };
  }
};

// Get pending approval work for an editor
export const getPendingApproval = async (id) => {
  try {
    const response = await api.get(`/api/editor/pending_approval/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get pending approval work' };
  }
};

// Get completed work for an editor
export const getCompletedWork = async (id) => {
  try {
    const response = await api.get(`/api/editor/completed_work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get completed work' };
  }
};

// Get YouTuber information for an editor
export const getYoutuber = async (id) => {
  try {
    const response = await api.get(`/api/editor/getYoutuber/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get YouTuber information' };
  }
};

// Submit work for review
export const submitWork = async (id, workData) => {
  try {
    const response = await api.post(`/api/editor/submit_work/${id}`, workData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit work' };
  }
};

// Reassign work to another editor
export const reassignWork = async (id) => {
  try {
    const response = await api.get(`/api/editor/reassign_work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to reassign work' };
  }
};

export default {
  getEditor,
  getAssignedWork,
  getPendingApproval,
  getCompletedWork,
  getYoutuber,
  submitWork,
  reassignWork
}; 