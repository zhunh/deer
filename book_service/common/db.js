var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/movieServer';
mongoose.connect(url,{ useNewUrlParser: true});
//连接数据库
module.exports = mongoose;