const router = require('express').Router();
const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
  console.log("userRoute")
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

<<<<<<< HEAD
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ message: "User already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
=======
  console.log(req.body)
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword
            });

            // here password hasing

            const storeData = await finalUser.save();

            console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }
>>>>>>> d2f269767c2660e3c7033951d2052afbb8c29229

    await new User({ ...req.body, password: hashedPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

<<<<<<< HEAD
=======



// user Login

router.post("/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
    const userValid = await userdb.findOne({email:email});

        if(userValid){

            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                res.status(422).json({ error: "invalid details"})
            }else{

                // token generate
                const token = await userValid.generateAuthtoken();
                

                // cookiegenerate
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result})
            }
     }

    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});



// user valid
router.get("/validuser",authenticate,async(req,res)=>{
    console.log("done")
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});


// user logout

// router.get("/logout",authenticate,async(req,res)=>{
//     try {
//         req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
//             return curelem.token !== req.token
//         });

//         res.clearCookie("usercookie",{path:"/"});

//         req.rootUser.save();

//         res.status(201).json({status:201})

//     } catch (error) {
//         res.status(401).json({status:401,error})
//     }
// })


>>>>>>> d2f269767c2660e3c7033951d2052afbb8c29229
module.exports = router;

