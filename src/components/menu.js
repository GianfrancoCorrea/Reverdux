import React from 'react';
import '../styles/menu.css';
import ButtonComponent from '../components/button';
import Score from '../components/score';
import PlayerInput from './player-input'


function Menu(props) {
	return (

		props.pause == false ?
			<div className="Menu">
				<PlayerInput for="Player1" actions={props.actions}></PlayerInput>
				<PlayerInput for="Player2" actions={props.actions}></PlayerInput>
				<ButtonComponent actions={props.actions.newGame} message="Play" style='success btn--big' />
			</div>
			:
			<div className="Menu">
				<ButtonComponent actions={props.actions.pause} message="Resume" style='success btn--big no-bottom-radius' />
				<Score score={props.score} players={props.players} />
				<div className="mb-3">
					<ButtonComponent actions={props.actions.newGame} message="New board" style="info btn--big " />
				</div>
				<div className="mb-3">
					<ButtonComponent actions={props.actions.restartGame} message="Restart game" style="danger btn--big " />
				</div>
			</div>


	)
}


export default Menu;


