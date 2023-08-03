
// import React, { useState,useRef } from 'react';
// import Songs from './songs';

// const Footer = ({nameref}) => {
//   const [selectedSong, setSelectedSong] = useState(null);

//   const handleSelectSong = (song) => {
//     setSelectedSong(song.title);
//   };

//   return (
//     <footer class="footer">
//       {selectedSong && <h3 className='m-[10px]'>Выбранная песня: {selectedSong} </h3>
//       }
//       <Songs nameref={nameref} onSelectSong={handleSelectSong} />
//     </footer>
//   );
// };

// export default Footer;


import React, { useState,useRef } from 'react';
import Songs from './songs';

const Footer = ({nameref}) => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectSong = (song) => {
    setSelectedSong(song.title);
  };

  return (
    <footer class="footer">
      {selectedSong && <h3 className='m-[10px]'>Выбранная песня: {selectedSong} </h3>
      }
      <Songs nameref={nameref} onSelectSong={handleSelectSong} />
    </footer>
  );
};

export default Footer;




