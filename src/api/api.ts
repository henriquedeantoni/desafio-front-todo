import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_API_URL,
  timeout: 5000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.message === 'Network Error') {
            console.error('Network Error. Check your connection.');
            // Actions
          } else if (error.code === 'ECONNABORTED') {
            console.error('Timeout Error. The request took a long time to respond.');
            // Actions
          } else if (error.response) {
            switch (error.response.status) {
              case 400:
                console.error('Erro 400: Invalid request.');
                break;
              case 401:
                console.error('Erro 401: Not authorized.');
                break;
              case 403:
                console.error('Erro 403: Access prohibited.');
                break;
              case 500:
                console.error('Erro 500: Internal server error.');
                break;
              default:
                console.error(`Unknown error: ${error.response.status}`);
            }
          } else {
            console.error('Unknown error:', error.message);
          }
      
          return Promise.reject(error);
        }
  );

export default api;