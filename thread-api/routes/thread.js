const path = require('path');
const express = require('express');
const multer = require('multer');
const {nanoid} = require('nanoid');
const config = require('../config');
const fileDb = require('../fileDb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
		cb(null, config.uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	},
});

const upload = multer({storage});

const router = express.Router();

router.get('/', (req, res) => {
	const threads = fileDb.getItems();
	res.send(threads);
});

router.post('/', upload.single('image'), (req, res) => {
	try {
		const thread = req.body;

		if (req.file) {
			thread.image = req.file.filename;
		}
		fileDb.addItem(thread);
		res.send(thread);
	} catch (e) {
		console.log(e, 'ERROR');
	}
});

module.exports = router;