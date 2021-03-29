const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = 3030;
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false};
const todoRoutes = require('./routes/todoRoutes');
mongoose.connect("mongodb://localhost/todolist", connectionOptions)
.then(() => {console.log('connect successfully')})
.catch(err => console.error(err))

app.use(express.json());
app.use(cors());
app.use('/todo/',todoRoutes);

app.listen(PORT,() => {
    console.log('listening on port '+PORT);
})