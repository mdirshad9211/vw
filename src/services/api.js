import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  signupAsEditor: (data) => api.post('/api/auth/signupaseditor', data),
  loginAsEditor: (data) => api.post('/api/auth/loginaseditor', data),
  signupAsYoutuber: (data) => api.post('/api/auth/signupasyoutuber', data),
  loginAsYoutuber: (data) => api.post('/api/auth/loginasyoutuber', data),
  getOauthUrl: (id) => api.get(`/api/auth/getOauthUrl/${id}`),
  oauth2callback: () => api.get('/api/auth/oauth2callback'),
};

// Editor APIs
export const editorAPI = {
  getEditor: (id) => api.get(`/api/editor/${id}`),
  assignWork: (id) => api.get(`/api/editor/assignwork/${id}`),
  pendingApproval: (id) => api.get(`/api/editor/pending_approval/${id}`),
  completedWork: (id) => api.get(`/api/editor/completed_work/${id}`),
  getYoutuber: (id) => api.get(`/api/editor/getYoutuber/${id}`),
  submitWork: (id, data) => api.post(`/api/editor/submit_work/${id}`, data),
  reassignWork: (id) => api.get(`/api/editor/reassign_work/${id}`),
};

// Youtuber APIs
export const youtuberAPI = {
  getYoutuber: (id) => api.get(`/api/youtuber/${id}`),
  getEditor: (id) => api.get(`/api/youtuber/getEditor/${id}`),
  pendingWork: (id) => api.get(`/api/youtuber/pending_work/${id}`),
  completedWork: (id) => api.get(`/api/youtuber/completed_work/${id}`),
  pendingReview: (id) => api.get(`/api/youtuber/pending_review/${id}`),
  recommendations: (id) => api.get(`/api/youtuber/recommendations/${id}`),
  assignWork: (id, data) => api.post(`/api/youtuber/assign_work/${id}`, data),
  addEditor: (id, data) => api.post(`/api/youtuber/add-editor/${id}`, data),
  reviewReject: (id, data) => api.put(`/api/youtuber/review_reject/${id}`, data),
  reviewApprove: (id, data) => api.put(`/api/youtuber/review_approve/${id}`, data),
};

export default api; 