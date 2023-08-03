import { useState } from 'react';
import { tracks } from './assets/tracks';

import DisplayTrack from "./display-track";
import PB from "./progress-bar";
import Controls from "./controls";


 const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    return (
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack currentTrack={currentTrack} />
          <Controls />
          <PB />
        </div>
      </div>
    );
  };
  export default AudioPlayer;