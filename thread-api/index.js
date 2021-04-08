const express = require('express');
const cors = require("cors");
const thread = require('./routes/thread');
const fileDb = require('./fileDb');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
fileDb.init();

const port = 8000;

app.use('/thread', thread);
app.listen(port, () => {
	console.log(`Server started on ${port} port!`);
});
