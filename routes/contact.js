//const path=require('path');
const express = require('express');

//const rootDir=require('../util/path');
const contact=require('../Controllers/contactus')

const router = express.Router();

// router.get('/contactus', (req, res, next) => {
//   res.sendFile(path.join(rootDir,'Views', 'contactus.html'));
// });
router.get('/contactus',contact.contactInfo);

// router.post('/contactus', (req, res, next) => {
//     res.redirect('/success'); 
// });

router.post('/contactus', contact.successMessage);

module.exports = router;