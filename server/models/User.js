const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = process.env.SECRET_KEY


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});





// hash password

userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next()
});


// token generate
userSchema.methods.generateAuthtoken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        return token23;
    } catch (error) {
        res.status(422).json(error)
    }
}


// createing model
const userdb = new mongoose.model("users", userSchema);

module.exports = userdb;


// if (this.isModified("password")) {    }

// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const passwordComplexity = require('joi-password-complexity');
// const Joi = require('joi');

// const userSchema = new mongoose.Schema({
//     username: {type:String, required: true},
//     email: {type:String, required: true},
//     password: {type:String, required: true}
// })

// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
//     return token;
// }

// const User = mongoose.model("user", userSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//         username: Joi.string().required().label('User Name'),
//         email: Joi.string().required().label('Email'),
//         password: passwordComplexity.string().required().label('User Name')
//     })
//     return schema.validate(data)
// }

// module.exports = {User, validate};