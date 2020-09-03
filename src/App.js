import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app_videos">
        {/* container of app videos (scrollable) */}
        <VideoCard />
        <VideoCard />
        <VideoCard />

        {/* Video */}
        {/* Video */}
        {/* Video */}
      </div>
    </div>
  );
}

export default App;
