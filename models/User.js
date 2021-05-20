// 몽구스를 가지고온다.
const mongoose = require('mongoose');

// 몽구스를 이용해서 스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 스키마를 모델로 감싸줌
const User = mongoose.model('User', userSchema)

// 다른파일로 쓰게하기위해
module.exports = { User }