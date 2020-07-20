const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./api/apiRouter.js')


app.use(express.static(path.join('build')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', apiRouter);



app.listen(9000, () => {
    console.log('Server is listening')
})