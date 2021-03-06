import React from 'react';
import Header from './components/header/Header';
import TinderCards from './components/tinderCard/TinderCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
