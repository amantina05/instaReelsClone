import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    //app component will run once when it loads, and never again (like componentdidmount?)
    db.collection('reels').onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
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

        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
