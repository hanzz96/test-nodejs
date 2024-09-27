const express = require('express')
const issueController = require('../controller/issueController')

const router = express.Router()
//this is middleware for parameter
router.param('id', issueController.checkID)

//create a CheckBody middleware
//check if body contain key name and price property
//if not send back bad request

router
    .route('/')
    .get(issueController.getAllIssues)
    .post(issueController.checkBody, issueController.createIssue)

router
    .route('/:id')
    .get(issueController.getIssue)
    .patch(issueController.checkUpdate, issueController.updateIssue)
    .delete(issueController.checkDelete, issueController.deleteissue)

module.exports = router
