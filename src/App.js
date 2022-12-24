import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
    </React.Fragment>
  );
}

export default App;
