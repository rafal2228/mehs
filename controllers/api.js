'use strict';

exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

exports.getFileUpload = (req, res, next) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res, next) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};