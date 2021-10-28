const {createGame,flippCoin,makeChoice,findGame } = require("./modules/coinflip.js")
const express = require('express');
const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.json())

server.get('/api/coinflip', (req, res, next) => { 
  res.status(200).send({flipId:createGame().id})
});

server.post('/api/coinflip/choose', (req, res, next) => { 

 const gameID = req.body.flipId;
 const choice = req.body.choice;
 if(gameID && choice){
   let game = makeChoice(gameID, choice);
   game = flippCoin(gameID)
   res.status(200).send(JSON.stringify({flipId:game.id, choice:game.picked})) 
 }else{
   res.status(400).end()
 }
  next();
});

server.get('/api/coinflip/:flipId',(req,res,next) =>{
  const gameID = req.params.flipId
  try{
      const game = findGame(gameID);
      if(!game){
        throwe "Opps no game"
      }
      res.status(200).send(JSON.stringify({res:game.res}))
  } catch{
    res.status(404).end();
  }
    next();
 });

server.listen(server.get('port'), function () {
    console.log('Flipp Coin server', server.get('port'));
});