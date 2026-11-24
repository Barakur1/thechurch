const express = require('express');
const router = express.Router();

router.get(['/', '/index'], (req, res) => {
  res.render('index');
});

router.get('/events', (req, res) => {
  res.render('events');
});

router.get('/sermons', (req, res) => {
  res.render('sermons');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/bible', (req, res) => {
  res.render('bible');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/give', (req, res) => {
  res.render('give');
});

router.get('/leadership', (req, res) => {
  res.render('leadership');
});

router.get('/ministries', (req, res) => {
  res.render('ministries');
});

router.get('/prayer', (req, res) => {
  res.render('prayer');
});

module.exports = router;