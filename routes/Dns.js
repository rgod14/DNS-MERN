// import express from 'express';
// import { getSave } from '../controller/Dns.js';
const express = require('express');
const Dns = require('../controller/Dns');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 
const router = express.Router();

router.post('/save', Dns.postSave);
router.get('/dns', Dns.getDnsRecords);
router.put('/dns/:id', Dns.putEditDnsRecord);
router.delete('/dns/:id', Dns.deleteDnsRecord);
router.post('/uploadCsv', upload.single('file'), Dns.postUploadCsv);
router.get('/search', Dns.getSearchDns);

module.exports = router;