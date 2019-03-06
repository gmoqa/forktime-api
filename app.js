/**
 * forktime-api
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 */
'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());

if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
}

app.get('', (req, res) => {
    res.json({
        message : 'Welcome to forktime API'
    });
});

module.exports = app;
