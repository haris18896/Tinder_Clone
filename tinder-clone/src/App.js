import React from 'react';
import Header from './components/header/Header';
import TinderCards from './components/tinderCard/TinderCards'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
