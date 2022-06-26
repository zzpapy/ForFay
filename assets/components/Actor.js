import React from 'react';
 
 const Actor = ({ id, poster, onClick, name }) => {
     return (
     <div key={id} id={id} className="card col-md-4" onClick={onClick}>         
        <p className="test"id={id}>{name}</p>
        <div className="test"id={id}> 
        <img id={id} className="imgPoster"src={poster} />
        </div>
     </div>
 )};
 
 export default Actor;