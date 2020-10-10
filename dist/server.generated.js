module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config={\n    env:\"development\"||false,\n    port:process.env.PORT||3001,\n    jwtSecret:process.env.JWT_SECRET||\"DSDSDSDSDSDSDDSSXSSDSDDSDDDSDSDLLLLLLIOIIOWQ\",\n    mongoUri:process.env.MONGODB_URI||process.env.MONGO_HOST||\n                'mongodb://'+(process.env.IP||'localhost')+':'+(process.env.MONGO_PORT||'27017')\n                +'/mernproject'\n\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.models */ \"./server/models/user.models.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\n\n\n\nconst signin=(req,res)=>{\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({email:req.body.email},(err,user)=>{\n        if(err||!user){\n            return res.status('401').json({\n                error:\"User Not Found\"\n            })\n        }\n        if(!user.authenticate(req.body.password)){\n            return res.status('401').json({\n                error:\"Email and password dont match\"\n            })\n        }\n        const token=jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({_id:user._id},_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,{expiresIn:'1h'})\n        res.cookie('t',token,{\n            expire:new Date()+9999\n        })\n        return res.json({\n            token,\n            user:{_id:user._id,email:user.email,name:user.name,bio:user.about}\n        })\n    })\n}\nconst signout=(req,res)=>{\n    res.clearcookie('t')\n    return res.status(200).json({\n        message:\"User Sign out\"\n    })\n}\nconst requireSignin=express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n    secret:_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n    algorithms: ['HS256'],\n    requestProperty:'auth'\n})\nconst hasAuthorization=(req,res,next)=>{\n    console.log(\"The Request is ---------------------------->\",req)\n    const authorized=req.profile && req.auth && req.auth._id.toString()===req.profile._id.toString()\n    if(!authorized){\n        return res.status('403').json({\n            error:'User is not authorized'\n        })\n    }\n    next()\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({signin,signout,requireSignin,hasAuthorization});\n\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/error.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/error.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./server/controllers/error.controller.js?");

/***/ }),

/***/ "./server/controllers/post.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/post.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_post_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/post.models */ \"./server/models/post.models.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst listNewsFeed=(req,res)=>{\n    let following=req.profile.following\n    following.push(req.profile._id)\n    _models_post_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({postedBy:{$in:req.profile.following}})\n        .populate('comments','text created')\n        .populate('comments.postedBy','_id name')\n        .populate('postedBy','_id name')\n        .sort('-created')\n        .exec((err,posts)=>{\n            if(err){\n                return res.status(400).json({\n                    error:`Error in listing news feed ${err}`\n                })\n            }\n            return res.json(posts)\n        })\n}\n\nconst listByUser=(req,res)=>{\n\t_models_post_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({postedBy:req.profile._id})\n\t\t.populate('comments','text created')\n\t\t.populate('comments.postedBy','_id name')\n\t\t.populate('postedBy','_id name')\n\t\t.sort('-created')\n\t\t.exec((err,posts)=>{\n\t\t\tif(err){\n\t\t\t\treturn res.status(400).json(\n\t\t\t\t{error:`Error in listUser ${err}`}\t\t\t\n\t\t\t\t)\n\t\t\t}\n\t\t\tres.json(posts)\n\t\t})\n\n}\n\nconst create=(req,res)=>{\n    let form=new formidable__WEBPACK_IMPORTED_MODULE_1___default.a.IncomingForm()\n    form.keepExtensions=true\n    form.parse(req,(err,fields,files)=>{\n        if(err){\n            return res.status(400).json({\n                error:`Error in parsing news feed ${err}`\n            })\n        }\n        let post=new _models_post_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields)\n        post.postedBy=req.profile\n        if(files.photo){\n            post.photo.data=fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(files.photo.path)\n            post.photo.contentType=files.photo.type\n        }\n        post.save((err,result)=>{\n            if(err){\n\n            return res.status(400).json({\n                error:`Error in saving news feed ${err}`\n            })\n            }\n            return res.json(result)\n        })\n    }) \n}\nconst photo=(req,res)=>{\n    const data=req.post.photo.data\n    res.set('Content-Type',req.post.photo.contentType)\n    return res.send(data)\n}\n\n\nconst postById=(req,res,next,postId)=>{\n    _models_post_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(postId)\n        .populate('postedBy','_id name')\n        .exec((err,post)=>{\n            if (err || !post)\n            return res.status('400').json({\n              error: `Post not found ${err}`\n            })\n          req.post = post\n          next()\n        })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({listNewsFeed,create,photo,postById,listByUser});\n\n\n//# sourceURL=webpack:///./server/controllers/post.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.models */ \"./server/models/user.models.js\");\n/* harmony import */ var _error_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.controller */ \"./server/controllers/error.controller.js\");\n/* harmony import */ var _error_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_controller__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n \n\n\n\n\n\n\nconst create=(req,res,next)=>{\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm()\n    form.keepExtensions=true\n    console.log(\"Logging from [create] [user.contorller.js] \",form)\n    form.parse(req,(err,fields,files)=>{\n        if(err){\n            return res.status(400).json({\n                error: `Photo could not be uploaded ${err}`\n            })\n        }\n        console.log(\"Logging from [create] [user.contorller.js] \",fields)\n        let user=new _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields)\n        // user.updated=Date.now()\n        if(files.photo){\n            user.photo.data=fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path)\n            user.photo.contentType=files.photo.type\n        }\n        // return res.json(user)\n        user.save((err,result)=>{\n            if(err){\n                return res.status(400).json({\n                    error:\"Some error occuured \"+err\n                })\n            }\n            user.hashed_password=undefined\n            user.salt=undefined\n            return res.json(result)\n        })\n    })\n    \n}\nconst temporaryImageData=(req,res)=>{\n    let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm()\n    form.keepExtensions=true\n    form.parse(req,(err,fields,files)=>{\n        if(err){\n            return res.status(400).json({\n                error:`Some Error Occered while Uploading ${err}`\n            })\n        }\n        let photoData=fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path)\n        // res.set('Content-Type',)\n        return res.json({data:photoData})\n    })\n}\nconst list=(req,res,next)=>{\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((err,users)=>{\n        if(err){\n           return res.status(400).json({\n                error:_error_controller__WEBPACK_IMPORTED_MODULE_1___default.a.getErrorMessage(err)\n            })\n        }\n        return res.status(200).json(users)\n    }).select('name email updated created')\n}\nconst read=(req,res,next)=>{\n    // console.log(\"The Request is ---------------------------->\",req)\n    req.profile.salt=undefined\n    req.profile.hashed_password=undefined\n    return res.status(200).json(req.profile)\n}\nconst update=(req,res,next)=>{\n    let form =new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm()\n \n    form.keepExtensions=true\n\n    form.parse(req,(err,fields,files)=>{\n        if(err){\n            return res.status(400).json({\n                error: `Photo could not be uploaded ${err}`\n            })\n        }\n        let user =req.profile\n        user=lodash__WEBPACK_IMPORTED_MODULE_2___default.a.extend(user,fields)\n        user.updated=Date.now()\n        if(files.photo){\n            user.photo.data=fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path)\n            user.photo.contentType=files.photo.type\n        }\n        user.save((err,result)=>{\n            if(err){\n                return res.status(400).json({\n                    error:\"Some error occuured \"+err\n                })\n            }\n            user.hashed_password=undefined\n            user.salt=undefined\n            res.json(user)\n        })\n    })\n}\nconst remove=(req,res,next)=>{\n    let user=req.profile\n    user.remove((err,deletedUser)=>{\n        if(err){\n            return res.status(400).json({\n                error:_error_controller__WEBPACK_IMPORTED_MODULE_1___default.a.getErrorMessage(err)\n            })\n        }\n        deletedUser.hashed_password=undefined\n        deletedUser.salt=undefined\n        return res.status(200).json(deletedUser)\n    })\n}\nconst userById=(req,res,next,id)=>{\n    console.log(\"In user By Id Method \",req)\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id)\n    .populate('following','_id name')\n    .populate('followers','_id name')\n    .exec((err,user)=>{\n        if(err){\n          return  res.status(400).json({\n                error:\"Some error is there [userBy id]\"+err\n            })\n        }\n        req.profile=user\n        next()\n    })\n}\nconst photo=(req,res,next)=>{\n    if(req.profile.photo.data){\n        res.set('Content-Type',req.profile.photo.contentType)\n        return res.send(req.profile.photo.data)\n    }\n    next()\n}//\nconst addFollowing=(req,res,next)=>{\n    console.log(\"user data is from [user.controller.js].... \",req.body)\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.userId,{$push:{following:req.body.followId}},(err,result)=>{\n        if(err){\n            return res.status(400).json({\n                error:`Error Occured ${err}`\n            })\n        }\n        next()\n    })\n}\nconst addFollower=(req,res)=>{\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.followId,{$push:{followers:req.body.userId}},{new:true})\n    .populate('following','_id name')\n    .populate('followers','_id name')\n    .exec((err,result)=>{\n        if(err){\n            return res.status(400).json({\n                error:`Error Occured ${err}`\n            })\n        }\n        result.hashed_password=undefined\n        result.salt=undefined\n        return res.json(result)\n    })\n}\nconst removeFollowing=(req,res,next)=>{\n    console.log(\"From [user.controller.js] [removeFollowing]\",req.body)\n    _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.userId,{$pull:{following:req.body.unFollowId}},(err,result)=>{\n        if (err) {\n            return res.status(400).json({\n              error: 'Error occured ${err}'\n            })\n          }\n          next()\n    })\n  \n}\nconst removeFollower=(req,res)=>{\n      _models_user_models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.unFollowId,{$pull:{followers:req.body.userId}},{new:true})\n      .populate('following','_id name')\n      .populate('followers','_id name')\n      .exec((err,result)=>{\n          if(err){\n            return res.status(400).json({\n                error:`Error Occured ${err}`\n            })\n          }\n          result.hashed_password=undefined\n          result.salt=undefined\n          return res.json(result)\n      })  \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({create,list,read,update,remove,userById,photo,addFollower,\n            addFollowing,removeFollower,removeFollowing,temporaryImageData});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/database.js":
/*!****************************!*\
  !*** ./server/database.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst connected = chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold.cyan;\nconst error = chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold.yellow;\nconst disconnected = chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold.red;\nconst termination = chalk__WEBPACK_IMPORTED_MODULE_2___default.a.bold.magenta;\n\nconst connect = (cb) => {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri)\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected',()=>{\n        console.log(connected(\"Mongoose default connection is open to \", _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri));\n        cb()\n    })\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', function(err){\n        console.log(error(\"Mongoose default connection has occured \"+err+\" error\"));\n    });\n\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('disconnected', function(){\n        console.log(disconnected(\"Mongoose default connection is disconnected\"));\n    });\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({connect});\n\n//# sourceURL=webpack:///./server/database.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst compile=(app)=>{\n    if(true){\n        const compiler=webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a)\n        const middleware=webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler,{\n            publicPath:_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n        })\n        \n        app.use(middleware)\n        app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler))\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    compile\n});\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIR=process.cwd()\n\n\n\nconst app=express__WEBPACK_IMPORTED_MODULE_0___default()()\n// devBundle.compile(app)\n\n\napp.use('/dist',express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_7___default.a.join(CURRENT_WORKING_DIR,'dist')))\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json())\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({extended:true}))\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()())\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()())\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()())\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()())\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/post.models.js":
/*!**************************************!*\
  !*** ./server/models/post.models.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst PostSchema=new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    text:{\n        type:String,\n        required:'Name is Required'\n    },\n    photo:{\n        data:Buffer,\n\n        contentType:String,\n       \n    },\n    postedBy:{\n        type:mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n        ref:'User'\n    },\n    created:{\n        type:Date,\n        default:Date.now\n    },\n    likes: [{type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User'}],\n    comments: [{\n        text: String,\n        created: { type: Date, default: Date.now },\n        postedBy: { type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId, ref: 'User'}\n      }]\n    \n})\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Posts',PostSchema));\n\n//# sourceURL=webpack:///./server/models/post.models.js?");

/***/ }),

/***/ "./server/models/user.models.js":
/*!**************************************!*\
  !*** ./server/models/user.models.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import { ObjectId } from 'mongodb'\n\nconst UserSchema=new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    name:{\n        type:String,\n        trim:true,\n        required:\"Name is Required\"\n    },\n    email:{\n        type:String,\n        trim:true,\n        unique:'Email already Exists',\n        match:[/.+\\@.+\\..+/,\"Please fill valid email address\"],\n        required:\"Email is required\"\n    },\n    created:{\n        type:Date,\n        default:Date.now()\n    },\n    updated:Date,\n    hashed_password:{\n        type:String,\n        required:\"Password is required\"\n    },\n    about:{\n        type:String,\n        trim:true,\n\tdefault:''\n    },\n    photo:{\n        data:Buffer,\n        contentType:String,\n        \n    },\n    following:[{\n        type:mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n        ref:'User'\n    }],\n    followers:[{\n        type:mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n        ref:'User'\n    }],\n    salt:String\n    \n})\n\nUserSchema\n    .virtual('password')\n    .set(function(password){\n        this._password=password,\n        this.salt=this.makeSalt(),\n        this.hashed_password=this.encryptPassword(password)\n    })\n    .get(function(){\n        return this._password\n    })\n\n\nUserSchema.methods={\n    authenticate:function(plainText){\n        return this.encryptPassword(plainText)===this.hashed_password\n    },\n    encryptPassword:function(password){\n        if(!password)return''\n        try{\n            return crypto__WEBPACK_IMPORTED_MODULE_1___default.a\n                    .createHmac('sha1',this.salt)\n                    .update(password)\n                    .digest('hex')\n        }\n        catch(err){\n            return ''\n        }\n    },\n    makeSalt:function(){\n        return Math.round((new Date().valueOf() * Math.random()))+''\n    }\n}\nUserSchema.path('hashed_password').validate(function(v){\n    if(this._password&&this._password.length<6){\n        this.invalidate('password','Password must be 6 charachters long')\n    }\n    if(this.isNew&&!this._password){\n        this.invalidate('password','Password must be 6 charachters long')\n    }\n},null)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User',UserSchema));\n\n\n//# sourceURL=webpack:///./server/models/user.models.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nconst router=express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()\n\nrouter.route('/auth/signin')\n        .post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin)\n        \nrouter.route('/auth/signout')\n        .get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/post.routes.js":
/*!**************************************!*\
  !*** ./server/routes/post.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/post.controller */ \"./server/controllers/post.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\n\nlet router=express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()\n\n\n\nrouter.route('/api/posts/feed/:userId')\n    .get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin,_controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listNewsFeed)\n\n\nrouter.route('/api/posts/new/:userId')\n    .post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin,_controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create)\n\nrouter.route('/api/posts/photo/:postId')\n        .get(_controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].photo)\n\nrouter.route('/api/posts/by/:userId')\n    .get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listByUser)\n\n\nrouter.param('userId',_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userById)\nrouter.param('postId',_controllers_post_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].postById)\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n\n\n\n//# sourceURL=webpack:///./server/routes/post.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()\nrouter.route('/api/users/follow')\n    .put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFollower)\nrouter.route('/api/users/unfollow')\n    .put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFollower)\n\n\nrouter.route('/api/users/getTemporaryLink')\n        .post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].temporaryImageData)\n\nrouter.route('/api/users')\n    .get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list)\n    .post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create)\n\n\nrouter.route('/api/users/:userId')\n    .get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read)\n    .put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update)\n    .delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove)\n\n\nrouter.route('/api/user/photo/:userId')\n    .get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photo)\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userById)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database */ \"./server/database.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_post_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/post.routes */ \"./server/routes/post.routes.js\");\n\n\n\n \n\n\n \n\n\n// app.get('/',(req,res)=>{\n   \n//     res.status(200).send(template())\n// })\n_database__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(()=>{\n    _express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port,(err)=>{\n        if(err){\n            console.log(err)\n        }\n        console.info('Server started on port %s',_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port)\n    })\n})\n\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use('/',_routes_user_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use('/',_routes_auth_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use('/',_routes_post_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use((err, req, res, next) => {\n    if (err.name === 'UnauthorizedError') {\n      res.status(401).json({\"error\" : err.name + \": \" + err.message})\n    }\n  })\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>(\n    `<!doctype html>\n    <html lang=\"en\">\n        <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n        <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n            <meta charset=\"utf-8\">\n            <title> MERN Kickstart</title>\n        </head>\n        <body>\n            <div id=\"root\">\n            </div>\n            <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n    </html>\n    `\n));\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const path=__webpack_require__(/*! path */ \"path\")\nconst webpack=__webpack_require__(/*! webpack */ \"webpack\")\nconst CURRENT_WORKING_DIR=process.cwd()\nconst config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'inline-source-map',\n    entry: [\n        'react-hot-loader/patch',\n        'webpack-hot-middleware/client?reload=true',\n        path.join(CURRENT_WORKING_DIR, 'client/main.js')\n    ],\n    output: {\n        \n        filename: 'bundle.js',\n        path: path.join(__dirname , '/dist'),\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.(jsx|js)?$/,\n                exclude: /node_modules/,\n                use: [\n                    'babel-loader'\n                ]\n            },\n            {\n\t\t\t\ttest:/\\.(css)$/,\n\t\t\t\texclude:/\\.module\\.css$/,\n\t\t\t\tuse:[\n                    'style-loader',\n                    'css-loader'\n                ]\n\t\t\t\t\n            },\n            {\n                test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n                use: 'file-loader'\n            },\n            {\n\t\t\t\ttest:/\\.module\\.css$/,\n                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'\n\t\t\t\tuse:[\n\t\t\t\t\t{\n\t\t\t\t\t\tloader:'style-loader'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tloader:'css-loader',\n\t\t\t\t\t\toptions:{\n\t\t\t\t\t\t\tmodules:{\n\t\t\t\t\t\t\t\tmode: 'local',\n            \t\t\t\t\tauto: true,\n            \t\t\t\t\texportGlobals: true,\n            \t\t\t\t\tlocalIdentName: '[hash:base64:5]',\n            \t\t\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\timportLoaders:1,\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t]\n\t\t\t}\n        ]\n    }, plugins: [\n          new webpack.HotModuleReplacementPlugin(),\n          new webpack.NoEmitOnErrorsPlugin()\n      ]\n}\n\n// const config={\n//     name:\"browser\",\n//     mode:\"development\",\n//     devtool:\"eval-source-map\",\n//     entry:[\n//         'react-hot-loader/patch',\n//         'webpack-hot-middleware/client?reload=true',\n//         path.join(CURRENT_WORKING_DIR,'client/main.js')\n\n//     ],\n//     output:{\n//         path:path.join(CURRENT_WORKING_DIR,'/dist'),\n//         filename:'bundle.js',\n//         publicPath:'/dist/'\n\n//     },\n//     module:{\n//         rules:[\n//             {\n//                 test:'/\\.(js|jsx)$/',\n//                 use:'babel-loader',\n//                 exclude:/node_modules/\n                \n//             },\n//             {\n// \t\t\t\ttest:/\\.(css)$/,\n// \t\t\t\texclude:/\\.module\\.css$/,\n// \t\t\t\tuse:[\n// \t\t\t\t\t'style-loader',\n// \t\t\t\t\t'css-loader'\n// \t\t\t\t]\t\n//             },\n//             {\n// \t\t\t\ttest:/\\.module\\.css$/,\n\t\t\t\t\n// \t\t\t\tuse:[\n// \t\t\t\t\t{\n// \t\t\t\t\t\tloader:'style-loader'\n// \t\t\t\t\t},\n// \t\t\t\t\t{\n// \t\t\t\t\t\tloader:'css-loader',\n// \t\t\t\t\t\toptions:{\n// \t\t\t\t\t\t\tmodules:{\n// \t\t\t\t\t\t\t\tmode: 'local',\n//             \t\t\t\t\tauto: true,\n//             \t\t\t\t\texportGlobals: true,\n//             \t\t\t\t\tlocalIdentName: '[hash:base64:5]',\n//             \t\t\t\t\tcontext: path.resolve(__dirname, 'src'),\n            \t\t\n// \t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\timportLoaders:1,\n\t\t\t\t\t\t\t\n// \t\t\t\t\t\t}\n// \t\t\t\t\t}\n\t\t\t\t\t\n// \t\t\t\t]\n// \t\t\t}\n//         ]\n//     },\n//      plugins: [\n//         new webpack.HotModuleReplacementPlugin(),\n//         new webpack.NoEmitOnErrorsPlugin()\n//     ]\n    \n// }\nmodule.exports=config\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/vishesh/Desktop/projects/memesApp/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });