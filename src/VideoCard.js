import React, { useState, useRef } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  //use state how we write variables in react
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  //use ref is like a pointer
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard_player"
        // poster="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/118771526_1046543299098772_6692966101899959703_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=Y9sq_km7TUIAX-VJzfS&amp;_nc_tp=18&amp;oh=5dec22b567469c82a9530923df48ae86&amp;oe=5F536957"
        // src="https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/118798636_234234227962222_1085651391074964202_n.mp4?_nc_ht=scontent-lga3-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=sYC2x5MPlm8AX_CfBPh&amp;oe=5F53869C&amp;oh=977d48b3c383e771bf44be5784247284"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
