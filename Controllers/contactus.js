const path=require('path');
const rootDir=require('../util/path');

exports.contactInfo= (req, res, next) => {
    res.sendFile(path.join(rootDir,'Views', 'contactus.html'));
};

exports.successMessage=(req, res, next) => {
         res.redirect('/success'); 
 };