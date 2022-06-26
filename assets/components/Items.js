import React from 'react';
 
 const Items = ({ id, poster, onClick, title }) => (
     <div className="card  col-md-4"key={id} id={id} onClick={onClick}>         
        <p>{title}</p>
        <img id={id} src={poster} />
     </div>
 );
 
 export default Items;