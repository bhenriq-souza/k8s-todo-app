const express = require('express');
const winston = require('winston');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./src/config');
const App = require('./src/main');

const dependencies = {
  config,
  express,
  mongoose,
  morgan,
  winston,
};

const app = new App(dependencies);

app.init();