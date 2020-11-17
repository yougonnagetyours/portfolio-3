import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../layouts/Header'
import Navbar from '../layouts/Navbar'
import Article from '../layouts/Article'
import Footer from '../layouts/Footer'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <header><Header /></header>
        <main>
          <aside><Navbar /></aside>
          <article><Article /></article>
        </main>
        <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;
