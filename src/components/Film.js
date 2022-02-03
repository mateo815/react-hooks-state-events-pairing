import React from 'react';
import FilmDetails from './FilmDetails';

function Film() {
  return <div>
    {/* <FilmDetails title="React Today and Tomorrow and 90% Cleaner React With Hooks" /> */}
    <iframe
      width="919"
      height="525"
      src={video.embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"
    />
    <h1>{video.title}</h1>

    <div>{video.views} | Uploaded {video.createdAt}</div>
  </div>;
}

export default Film;
