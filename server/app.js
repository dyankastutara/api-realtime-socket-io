const app = require("express")();
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});

io.listen(4000);

app.set('port', process.env.PORT || '8080')
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'client/index.html'));
// });

io.on('connection', (socket) => {
  socket.on('chat-1-message', (msg) => {
    console.log(msg);
    io.emit('chat-1-message', msg);
  });
});

server.listen(app.get('port'), (error)=>{
   if (error) {
      console.log('Error during app startup', error);
   }else{
      console.log('App running on port = ', app.get('port'));
   }
})
