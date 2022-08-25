const { Router } = require('express');
const {
  signup,
  login,
  updateProfile,
  uploadPhoto,
  protect,
} = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

router.use(protect);

router.patch('/updateMe', uploadPhoto, updateProfile);

module.exports = router;
