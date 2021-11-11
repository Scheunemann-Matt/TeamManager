const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const TeamManagersApp = require('./server/routes/player.routes');
require('./server/config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));

TeamManagersApp(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );
