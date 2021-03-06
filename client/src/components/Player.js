import React from 'react';


const Player = props => {
    return (
        <div>
            <div key={props.player.id} className='player-info'>
                <h2>{props.player.name}</h2>
                <h3>{props.player.age}</h3>
                <h3>Favorite Hand: {props.player.fav_hand}</h3>
                <img className="player-img" src={props.player.img_url} alt={props.player.name}/><br></br>
            </div>
        </div>
    )
}

export default Player;