import React from 'react';
import Image from 'next/image';
import spotify from '../components/spotify-logo-transparent-free-png.webp';

const Header = ({nameref}) => {
  return (
    <header>
      <h1 className='text-[30px] text-green-500 ' ref={nameref}>Spotify</h1>
        <Image
         class="spotifylogo"
          src={spotify}
           alt='logo' 
           />
    </header>
  );
}

export default Header;




