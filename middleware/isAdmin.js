// middleware/isAdmin.js
module.exports = function isAdmin(req, res, next) {
    // Assuming you store user session/auth data (e.g., req.user or req.session.user)
    if (req.session && req.session.user && req.session.user.isAdmin) {
        return next(); // User is an admin, proceed to the controller
    }
    
    // Otherwise, redirect them to login or send a 403 Forbidden error
    return res.status(403).redirect('/login');
};
module.exports = function isAdmin(req, res, next) {
    // TODO: Add actual authentication check later (e.g., if user is logged in as admin)
    // For now, it allows you to view the page immediately:
    return next();
};