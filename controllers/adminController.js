// controllers/adminController.js

exports.getDashboard = async (req, res) => {
    try {
        const dashboardData = {
            title: 'Admin Dashboard',
            user: req.session.user,
            stats: {
                totalUsers: 1250,
                activeSessions: 42,
                pendingApprovals: 5
            }
        };
        res.render('admin/dashboard', dashboardData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error while loading admin dashboard');
    }
};

exports.getMembers = async (req, res) => {
    try {
        const membersData = {
            title: 'Manage Members',
            user: req.session.user,
            members: []
        };
        res.render('admin/members', membersData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error while loading members');
    }
};

// Added this to fix your current error:
exports.getEvents = async (req, res) => {
    try {
        const eventsData = {
            title: 'Manage Events',
            user: req.session.user,
            events: []
        };
        res.render('admin/events', eventsData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error while loading events');
    }
};