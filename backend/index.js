const express = require('express');
const App = require('./src/main');

const app = new App(express);

app.init();