const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addThoughtsResponse,
  removeThoughtsResponse,
} = require('../../controllers/thoughtsController');

// /api/videos
router.route('/').get(getThoughts).post(createThoughts);

// /api/videos/:videoId
router
  .route('/:thoughtsId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/videos/:videoId/responses
router.route('/:thoughtsId/reaction').post(addThoughtsResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:thoughtsId/reaction/:reactionId').delete(removeThoughtsResponse);

module.exports = router;
