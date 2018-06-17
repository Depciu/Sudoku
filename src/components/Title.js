import React from 'react';

const Title = ({number, playerPick}) => {
  if (number === ".") {
    number = '';
  } 
   
  return <input onKeyDown={event => event.preventDefault()} type="number" min="1" max="9" value={number} onChange={(e) => playerPick(e.target.value)} />;
}

export default Title;
