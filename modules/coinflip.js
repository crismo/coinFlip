const games = {}

function flippCoin(id){
  if(games[id]){
    games[id].res = Math.random() > 0.5 ? "Krone":"Mynt";
  } else {
    throw Error("No such coin flip game")
  }

  return games[id];
}

function makeChoice(gameId, choice){
   if(games[id]){
    games[id].picked = choice ? "Krone":"Mynt";
  } else {
    throw Error("No such coin flip game")
  }
  return games[id];
}

function createGame(){
  const game = {id:Math.random().toString(32), picked:null,  res:null};
  games[game.id] = game;
  return game;
}

function findGame(gameId){
  return games[gameId];
}

module.exports.createGame = createGame;
module.exports.flippCoin = flippCoin;
module.exports.makeChoice = makeChoice;
module.exports.findGame = findGame;