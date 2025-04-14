import api from './api';

/**
 * YouTuber Service - Handles all YouTuber-related API calls
 */

// Get YouTuber profile
export const getYoutuber = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get YouTuber profile' };
  }
};

// Get available editors for a YouTuber
export const getEditors = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/getEditor/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get editors' };
  }
};

// Get pending work for a YouTuber
export const getPendingWork = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/pending_work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get pending work' };
  }
};

// Get completed work for a YouTuber
export const getCompletedWork = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/completed_work/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get completed work' };
  }
};

// Get pending review work for a YouTuber
export const getPendingReview = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/pending_review/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get pending review work' };
  }
};

// Get recommendations for a YouTuber
export const getRecommendations = async (id) => {
  try {
    const response = await api.get(`/api/youtuber/recommendations/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get recommendations' };
  }
};

// Assign work to an editor
export const assignWork = async (id, workData) => {
  try {
    const response = await api.post(`/api/youtuber/assign_work/${id}`, workData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to assign work' };
  }
};

// Add an editor to a YouTuber's team
export const addEditor = async (id, editorData) => {
  try {
    const response = await api.post(`/api/youtuber/add-editor/${id}`, editorData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add editor' };
  }
};

// Reject work with feedback
export const reviewReject = async (id, feedbackData) => {
  try {
    const response = await api.put(`/api/youtuber/review_reject/${id}`, feedbackData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to reject work' };
  }
};

// Approve work with feedback
export const reviewApprove = async (id, feedbackData) => {
  try {
    const response = await api.put(`/api/youtuber/review_approve/${id}`, feedbackData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to approve work' };
  }
};

export default {
  getYoutuber,
  getEditors,
  getPendingWork,
  getCompletedWork,
  getPendingReview,
  getRecommendations,
  assignWork,
  addEditor,
  reviewReject,
  reviewApprove
}; 