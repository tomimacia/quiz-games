export const getColor = (num,playerOne,playerTwo)=>{
    if (num === 1) {
        return playerOne.color;
      } else if (num === 2) {
        return playerTwo.color;
      } else return "white";
}