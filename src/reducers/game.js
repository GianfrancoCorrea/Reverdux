// actions
const SWITCH_TURN = 'SWITCH_TURN'
const MAKE_MOVE = 'MAKE_MOVE'
const NEW_GAME = 'NEW_GAME'

function reversiApp(state = newBoard(), action) {
    switch (action.type) {
        case NEW_GAME:
          return Object.assign({}, state, {
            board: newBoard()
          })
        case SWITCH_TURN:
          return Object.assign({}, state, {
            turn: changeTurn(state.turn)
          })    
        case MAKE_MOVE:
        return console.log('make move')
        default:
          return state
        }
}
const changeTurn = (turn) => {
		if(turn == 1){
			return 2
		} else { return 1}
	}
 const newBoard = () => 
  ([0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 2, 0, 0, 0,
	0, 0, 0, 2, 1, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0])

export default reversiApp