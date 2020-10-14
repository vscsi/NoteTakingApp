const path = ('path');
const express = require('express');
const router = express.Router();
const controllerNotes = require('../controllers/notes')

// /add-note => GET
router.get('/add-note', controllerNotes.getAddNote);

// /admin/add-note => POST
router.post('/add-note', controllerNotes.postAddNote);

module.exports = router;