const Notes = require('../models/note');

exports.getAddNote = (req, res, next) => {
    res.render('add-note', {
        pageTitle: 'Add note',
        path: '/add-note',
    })
}

exports.postAddNote = (req, res, next) => {
    const note = new Notes(req.body.notes);
    note.save();
    res.redirect('/');
}

exports.getNotes = (req, res, next) => {
    Notes.fetchAll((notes) => {
        res.render('notes', {
            note: notes,
            pageTitle: 'Notes',
            path: '/',
        });
    })
}