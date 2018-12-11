// actions
// SWITCH_TURN
// MAKE_MOVE
// NEW_GAME

function reversiApp(state = initialState, action) {
    switch (action.type) {
        case NEW_GAME:
          return Object.assign({}, state, {
            board: action.newBoard
          })
        case SWITCH_TURN:
          return Object.assign({}, state, {
            turn: action.switchTurn
          })    
        case MAKE_MOVE:
        return action.makeMove
        default:
          return state
        }
}