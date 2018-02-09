import React from 'react';

const Title = ({number}) => {
  if(number === ".") {
    number = '';
   return (<input type="number" min="1" max="9" value={number}/>);
 } else {
   return (<input type="number" min="1" max="9" value={number}/>);
 }
}

export default Title;
