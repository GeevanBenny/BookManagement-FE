import React from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import { Route, Routes } from 'react-router-dom';
import BookHome from './Components/BookHome';
import Header from './Components/Header';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<BookHome/>}></Route>
      <Route path='/list' element={<BookList/>}></Route>
      <Route path='/form' element={<BookForm/>}></Route>
      <Route path='/details' element={<BookDetails/>}></Route>
      
      
      </Routes>
    </>
  );
}

export default App;

