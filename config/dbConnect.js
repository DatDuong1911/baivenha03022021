// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Đã chạy thành công");
});


//tao bang du lieu
var Schema = mongoose.Schema
    // //Bài gõ lại
    //     //dinh nghia cac cot

// var userSchema = new Schema({
//     name: String,
//     password: String,
//     email: String,
//     age: Number
// })

// // dinh nghia ten bang

// var userModel = mongoose.model("bvn", userSchema)

// //// tao ban ghi

// // userModel.create({
// //     name: "A",
// //     password: "1",
// //     email: "a1@abc.com",
// //     age: 1
// // }).then(function(data) {
// //     console.log(data);
// // }).catch(function(err) {
// //     console.log(err);
// // })

// // //tim kiem
// // userModel.findById("601ad4420789f338d8136160").then((data) => {
// //     console.log(data);
// // }).catch((err) => {
// //     console.log(err);
// // });

// // //cap nhat
// // userModel.updateOne({
// //     _id: "601ad4517bfff33a48dfde7f"
// // }, {
// //     name: "A",
// //     password: "1"
// // }).then((data) => {
// //     console.log(data);
// // }).catch((err) => {
// //     console.log(err);
// // });

// // userModel.updateMany({
// //     name: "A"
// // }, {
// //     name: "AAAAAA",
// //     age: 69
// // }).then((data) => {
// //     console.log(data)
// // }).catch((err) => {
// //     console.log(err);
// // });

// //xoa

// userModel.deleteOne({
//     _id: "601ad4517bfff33a48dfde7f"
// }).then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log(err);
// });


// //B À I 1 B À I 1 B À I 1 B À I 1 B À I 1 B À I 1 B À I 1 B À I 1 B À I 1 

// var userSchema = new Schema({
//     content: String,
//     title: String,
//     comment: String
// })

// var userModel = mongoose.model("bai1", userSchema)
//     //a) Tạo 2 bản ghi mới

// // userModel.create({
// //     content: "Bài về nhà",
// //     title: "Bài 2",
// //     comment: "Gõ lại code của buổi học hôm trước"
// // }).then((data) => {
// //     console.log(data);

// // }).catch((err) => {
// //     console.log(err);
// // });

// //b)Tìm toàn bộ bài post

// // userModel.find().then((result) => {
// //     console.log(result);

// // }).catch((err) => {
// //     console.log(err);
// // });

// //c)In ra 1 bài post với đk id

// userModel.findById("601ba6ef9f496734c81cdfe4").then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });

// //d) cập nhật giá trị một content theo id

// userModel.updateOne({
//     _id: "601ba6ef9f496734c81cdfe4"
// }, {
//     content: "Bản ghi này tạo ra do lúc chạy quên không comment lại code tạo"
// }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });

//B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2 B À I 2

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
})

var userModel = mongoose.model("bai2", userSchema)

// // a) Tạo 5 bản ghi
// userModel.create({
//     username: "eee",
//     password: "eee",
//     email: "eee@eee.eee",
//     age: 69,
//     school: "eee"
// }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);

// });

// b) Tìm ra 1 bản ghi theo username, password
//  ( nếu không tim thấy thì in ra thông báo là không tìm thấy,
//      còn tìm thấy thì in ra thông báo )

userModel.find({
    username: "AAA",
    password: "aaa"
}).then(function(data) {
    if (data.username && data.password) {
        console.log("có user");
    } else {
        console.log("ko có user nào");
    }
}).catch(function(err) {
    console.log(err);
})

// //c) Xóa 1 bản ghi theo id

// userModel.deleteOne({
//     _id: "601bacf7a13811032067577c"
// }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });

// //d) Thực hiện tìm và in ra giới hạn chỉ in ra 3 bản ghi

// userModel.find().limit(3).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });