import React from 'react'
import video from "../data/video.js"
import Film from "./Film";
import Buttons from "./Buttons";
import FilmPlayer from './FilmPlayer';

function App() {
  console.log("Here's your data:", video);

  return (

    <div className="App">
      <FilmPlayer />
      <Film />
      <Buttons />
    </div>
  );
}

export default App;
