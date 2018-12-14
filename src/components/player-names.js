import React from 'react'
import PlayerInput from './player-input'
import '../buttons/components/button.css';

function PlayerNames(props){
    return(
                <div className="formName">
                    <form  onSubmit={props.handleSubmit} >
                    <div>
                        <PlayerInput for="Player1"></PlayerInput>	
                        <PlayerInput for="Player2"></PlayerInput>
                    </div>
                    <button type="submit" className="btn btn--success btn-lg">Set Names</button>
                    </form>
                    {props.nameSeted == true ? 
                        <span>Names seted</span>
                    :<span></span>}
                </div>

    )
}

export default PlayerNames