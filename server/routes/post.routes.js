import express from 'express'
import userCtrl from '../controllers/user.controller'
import postCtrl from '../controllers/post.controller'

let router=express.Router()

import authCtrl from '../controllers/auth.controller'

router.route('/api/posts/feed/:userId')
    .get(authCtrl.requireSignin,postCtrl.listNewsFeed)


router.route('/api/posts/new/:userId')
    .post(authCtrl.requireSignin,postCtrl.create)

router.route('/api/posts/photo/:postId')
        .get(postCtrl.photo)

router.route('/api/posts/by/:userId')
    .get(authCtrl.requireSignin, postCtrl.listByUser)


router.param('userId',userCtrl.userById)
router.param('postId',postCtrl.postById)



export default router



