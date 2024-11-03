import React from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api', //https://reqres.in/api/users
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm một interceptor cho request
axiosClient.interceptors.request.use(
  (config) => {
    // Làm gì đó trước khi gửi request
    config.headers['Authorization'] = 'Bearer token'; // Thêm token vào headers
    return config; // Nhớ trả về config
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  },
);

// Thêm một interceptor cho response
axiosClient.interceptors.response.use(
  (response) => {
    // Làm gì đó với dữ liệu response
    return response.data; // Chỉ trả về data, bỏ qua phần còn lại
  },
  (error) => {
    // Xử lý lỗi response
    console.error('Response error:', error);
    return Promise.reject(error);
  },
);

// Sử dụng axiosClient để gửi request
// axiosClient
//   .get('/api/data')
//   .then((data) => {
//     console.log('Data:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

export default axiosClient;
