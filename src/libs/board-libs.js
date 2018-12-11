

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

export const ownerStyle = (owner, className) => {

    if(owner == 1){
        return `${className} ${className}--player1`
    } else if(owner == 2) {
        return `${className} ${className}--player2`
    } else return `${className} `
    // ${className}--none
}