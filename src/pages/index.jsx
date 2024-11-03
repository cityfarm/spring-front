// src/pages/reactjs/index.js
import React from 'react';
import { Link } from 'react-router-dom';

const ReactCourse = () => {
  return (
    <div>
      <h1>Khóa Học ReactJS</h1>
      <p>Chào mừng bạn đến với khóa học ReactJS! Dưới đây là danh sách các buổi học:</p>
      <ul>
        <li>
          <Link href="/reactjs/lesson1">Buổi 1: Giới thiệu về React</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson2">Buổi 2: Cài đặt môi trường</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson3">Buổi 3: JSX và Components</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson4">Buổi 4: Props và State</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson5">Buổi 5: Lifecycle Methods</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson6">Buổi 6: React Router</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson7">Buổi 7: Quản lý State với Redux</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson8">Buổi 8: Fetching Data</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson9">Buổi 9: Testing React Components</Link>
        </li>
        <li>
          <Link href="/reactjs/lesson10">Buổi 10: Dự án thực tế</Link>
        </li>
      </ul>
    </div>
  );
};

export default ReactCourse;
