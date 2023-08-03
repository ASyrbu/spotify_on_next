import React from 'react';
import playlist from './playlist';

const Songs = ({ onSelectSong, nameref }) => {
  const handleClick = (song) => {
    onSelectSong(song);
    if (nameref && nameref.current) {
      nameref.current.textContent = 'Выбранная песня:'+' '+ song.title + '    ' + song.compositor + '   ' + song.year
    }
  };

  // return (
  //   <div class="songlist">
  //     <h2>Список песен:</h2>
  //     <table>
  //       {playlist.map((song) => (
  //         <tr class="stroka" key={song.id} onClick={() => handleClick(song)}>
  //           <td class="title"> {song.title} </td>
  //           <td class="year"> {song.year} </td>
  //           <td class="compositor"> {song.compositor} </td>
  //         </tr>
  //       ))}
  //     </table>
  //   </div>
  // );


  return (
    <div className='top-[10px] bg-gray-500'>
      <h2 className='p-[5px] font-bold text-lime-400'>Мой Плейлист:</h2>
      <div className="flex flex-col">
        {playlist.map((song) => (
          <div className="flex flex-row" key={song.id} onClick={() => handleClick(song)}>
            <div className='min-w-[250px]'>
              <div className="flex flex-row p-[10px] m-[3px] bg-green-400" >{song.title}</div>
            </div>
            <div className='min-w-[250px]'>
              <div className="flex flex-row p-[10px] m-[3px] bg-green-300" >{song.compositor}</div>
            </div>
            <div className='min-w-[250px]'>
              <div className="flex flex-row p-[10px] m-[3px] bg-green-200" >{song.year}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;

