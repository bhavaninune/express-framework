const path=require('path');
const express = require('express');
const rootDir=require('../util/path');

const router = express.Router();

router.get('/success', (req, res) => {
    res.render('success'); // Assuming you are using a templating engine like Handlebars
});
router.post('/submit-contact', (req, res) => {
    // Handle form submission logic here (save to database, send emails, etc.)
    // Redirect to /success after processing the form
    res.redirect('/success');
});




module.exports = router;