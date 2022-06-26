import React from 'react';
 
 const Items = ({ id, poster, onClick, title }) => (
     <div className="card itemCast col-md-4"key={id} id={id} onClick={onClick}>         
        <p  className='actorCast'>{title}</p>
        <div className='actorImg'>
        <img id={id} src={poster} />
        </div>
     </div>
 );
 
 export default Items;