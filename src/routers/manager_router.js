const express = require("express");

const router = require("express-promise-router")();

const clientUpload = require("../apps/controllers/clientUpload");

router.get("/", clientUpload.upload);
router.post("/process_form", clientUpload.postImage);

module.exports = router;
