const express = require('express');
const url = require('url');
const path = require('path');
const SessionManager = require('./utils/server/sessionManager');
const { showSoon, ready, showError, welcome } = require('./utils/server/logger');

const app = express();
const soon = true;
const releaseDate = '';
const version = '1.0.0';

app.use('/assets', express.static(path.join(__dirname, 'www', 'assets')));
app.use('/src', express.static(path.join(__dirname, 'www', 'src')));

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

app.get('/about', (req, res) => {
  handleRequest(req, res, 'about.html');
});

app.get('/', (req, res) => {
  handleRequest(req, res, 'main.html');
});

app.get('*', (req, res) => {
  handleRequest(req, res, 'main.html');
});

function handleRequest(req, res, file) {
  try {
    const userAgent = req.headers['user-agent'];

    if (/Mozilla|Chrome|Safari|Firefox|Opera|MSIE|Trident/.test(userAgent)) {
      if (soon) {
        res.sendFile(path.join(__dirname, 'www', 'soon.html'));
      } else {
        res.sendFile(path.join(__dirname, 'www', file));
      }
    } else {
      handleNonBrowserRequest(req, res);
    }
  } catch (e) {
    showError(res, e);
  }
}

function handleNonBrowserRequest(req, res) {
  res.set('Content-Type', 'text');
  const session = new SessionManager(res);
  const delay = url.parse(req.url, true).query.delay || 5;

  if (soon) {
    showSoon(session, releaseDate);
  } else {
    welcome(session, version, delay);
  }

  req.on('close', () => {
    session.disconnect();
  });
}

const server = app.listen(31224, () => {
  ready();
});
