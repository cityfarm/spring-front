// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        Header
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/todos">Todos</NavLink>
        </p>
        <p>
          <NavLink to="/albums">Albums</NavLink>
        </p>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to the Home Page</h2>
                <p>This is the content of the Home Page.</p>
              </div>
            }
          />
          <Route path="/todos" element={<TodoFeature />} />
          <Route path="/albums" element={<AlbumFeature />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        Footer
      </div>
    </Router>
  );
}

export default App;
