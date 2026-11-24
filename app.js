// app.js
const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const session = require('express-session'); // Required for protecting admin routes

// Import your route files
const pageRoutes = require('./routes/pageRoutes');
const adminRoutes = require('./routes/adminRoutes'); // New admin routes

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/login', (req, res) => {
    res.render('login'); // or res.sendFile(__dirname + '/public/login.html');
});

// Core middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Session middleware (Required for checking admin login state in middleware/isAdmin.js)
app.useUI89O0-({
    secret: 'your-super-secret-key-change-this',
    resave: false,
    saveUninitialized: false
});

// Mount your routes
app.use('/', pageRoutes);
app.use('/admin', adminRoutes); // All admin URLs will be prefixed with /admin (e.g., /admin/dashboard)

// Start server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});