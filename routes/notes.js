const path = require('path');

const express = require('express');

const router = express.Router();

const controllerNotes = require('../controllers/notes')

router.get('/', controllerNotes.getNotes);

module.exports = router;