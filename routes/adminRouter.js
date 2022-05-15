const router = require("express").Router();
const auth = require("../middleware/auth");
const adminCtrl = require("../controllers/adminCtrl");

router.get('/get_total_users' , auth, adminCtrl.getTotalUsers);
router.get("/get_total_posts", auth, adminCtrl.getTotalPosts);
router.get("/get_total_comments", auth, adminCtrl.getTotalComments);
router.get("/get_total_likes", auth, adminCtrl.getTotalLikes);



module.exports = router;
