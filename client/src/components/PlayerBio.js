import React from 'react';

const PlayerBio = ({player}) => {

    return (
        <div key={player.id} className='player-bio'>
            <h3>{player.name}</h3>
            <h4>{player.age}</h4>
            <h4>Favorite Hand: {player.fav_hand}</h4>
            <img className='player-image' src={player.img_url} alt={player.name}/>
            <br>
            </br>
            <button onClick={ () => { player.destroyPlayer(player.id)}}>DELETE PLAYER </button>
        </div>    
    )
}

export default PlayerBio;