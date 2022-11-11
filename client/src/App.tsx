import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navigation} from './components';
import {BooksPage, NotFoundPage, ReadersPage, RentsPage} from './pages';
import './App.css';

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Navigation />}>
              <Route index element={<RentsPage />} />
              <Route path={'/readers'} element={<ReadersPage />} />
              <Route path={'/books'} element={<BooksPage />} />
              <Route path={'*'} element={<NotFoundPage />} />
          </Route>
      </Routes>
  );
}

export default App;
