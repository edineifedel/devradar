const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.connect('mongodb+srv://omnistack:omnistack10@cluster0-cmgun.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json()) // Inform express understand request json
app.use(routes);

app.listen(3000);