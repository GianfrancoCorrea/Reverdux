

export const siblingsCells = [
    [-1,-1], [-1, 0], [-1, 1],
    [ 0,-1],          [ 0, 1],
    [ 1,-1], [ 1, 0], [ 1, 1]]

   
export const getCoords = (cell, param) => {
    if(param == 'y') return Math.trunc(cell / 8)
    else return cell % 8
    
}

export const getCell = (row, col) => {
    return (row * 8) + col
}

