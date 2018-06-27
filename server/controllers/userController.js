const  User = require("../model/userModel");
const bcrypt = require("bcryptjs");

// ============= tambahan npm install --save express-validator =========

const { check, validationResult } = require("express-validator/check");
var jwt = require("jsonwebtoken");

// ============= tambahan npm install --save express-validator =========

function signUpUser(req, res) {
  // ============ add validations ============
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // ============ add validations ============

  let objUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  User.create(objUser)
    .then(users => {
      res.status(200).json({ message: "Signup success", users });
    })
    .catch(error => {
      res.status(400).json({ message: "Signup error", error });
    });
}

function loginUser(req, res) {

  let userLoginData = req.body.user;
  let pass = req.body.password;


  //======== login with username or email =============

  // var isEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(userLoginData);

  // let field = 'username';
  // if (isEmail) {
  //   field = 'email';
  // }

  //======== login with username or email =============

  User.findOne({email:req.body.email})
    .then(user => {
      // console.log('=============',user);
      

      let compare = bcrypt.compareSync(pass, user.password);

      const userInfo = {
        username: user.username, 
        email: user.email
      };

      if (compare) {
        jwt.sign(
          { email: user.email},
          process.env.SECRET_KEY,
          (err, token) => {
            console.log(token);
            
            res.status(200).json({ message: 'Logged In Successfully', token});
          }
        );
      }
    })
    .catch(error => {
      res.status(400).json({ message: "Wrong username/password", error });
    });
}

function getUser(req, res) {
  User.find()
    .then(users => {
      res.status(200).json({
        message: 'get tweet',
        users
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}


// function verifyToken(req, res) {
//   const header = req.headers["authorization"];
//   if (typeof header !== 'undefined') {
//     const compare = header.split(" ");
    
//     const token = compare[0];
//     let decoded = undefined;
//     try {
//       decoded = jwt.verify(token, process.env.SECRET_KEY);
//     } catch (e) {
//       return res.status(400).json({ message: 'Invalid Token' });
//     }
//     req.user = decoded;
//     if (decoded.role === "admin") {
//       res.status(200).json({ message: 'You can proceed' });
//     } else {
//       res.status(403).json({ message: 'Forbidden '});
//     }
//   } else {
//     res.status(403).json({ message: 'Forbidden '});
//   }
// }

module.exports = {
  signUpUser,
  loginUser,
  getUser
  // verifyToken
};