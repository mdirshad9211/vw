import api from './api';

/**
 * Auth Service - Handles all authentication-related API calls
 */

// Sign up as an editor
export const signupAsEditor = async (userData) => {
  try {
    const response = await api.post('/api/auth/signupaseditor', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to sign up as editor' };
  }
};

// Login as an editor
export const loginAsEditor = async (credentials) => {
  try {
    const response = await api.post('/api/auth/loginaseditor', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to login as editor' };
  }
};

// Sign up as a YouTuber
export const signupAsYoutuber = async (userData) => {
  try {
    const response = await api.post('/api/auth/signupasyoutuber', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to sign up as YouTuber' };
  }
};

// Login as a YouTuber
export const loginAsYoutuber = async (credentials) => {
  try {
    const response = await api.post('/api/auth/loginasyoutuber', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to login as YouTuber' };
  }
};

// Get OAuth URL for Google login/signup
export const getOauthUrl = async (role) => {
  try {
    const response = await api.get(`/api/auth/getOauthUrl/${role}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get OAuth URL' };
  }
};

// Handle OAuth callback
export const handleOauthCallback = async (code) => {
  try {
    const response = await api.get('/api/auth/oauth2callback', { params: { code } });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to handle OAuth callback' };
  }
};

// Logout user
export const logout = () => {
  // Clear local storage
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('userId');
  return { success: true };
};

export default {
  signupAsEditor,
  loginAsEditor,
  signupAsYoutuber,
  loginAsYoutuber,
  getOauthUrl,
  handleOauthCallback,
  logout
}; 