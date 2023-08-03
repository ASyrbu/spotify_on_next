import React,{useRef} from 'react';
import Header from './header';
// import Main from './main';
import Footer from './footer';
import AudioPlayer from './player/audio-player';


const App = () => {
  const nameref =useRef(null);
  return (
    <div>
      <Header nameref={nameref}/>
      <AudioPlayer/>
      <Footer nameref={nameref}/>
    </div>
  );
}

export default App;


