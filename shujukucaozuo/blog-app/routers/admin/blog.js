var express = require('express');
var router = express.Router();


var fs = require('fs');

// 引入数据处理模块
var dal = require('../../common/dalData');

//管理后台列表页
router.get('/',function(req,res){
	var data = dal.getData();
	res.render('admin/blogs/index',{list:data});
})


//新增页面
router.get('/add',function(req,res,next){
	var postUrl = '/admin/blog/create';
	res.render('admin/blogs/editor',{data:{},postUrl:postUrl});
})

//编辑页面
router.get('/edit/:id',function(req,res){
	var data = dal.getDataByID(req.params.id);  // 更新当前文字的浏览次数。
	var postUrl = '/admin/blog/update/'+req.params.id;  // 获取当前文章数据。
	res.render('admin/blogs/editor',{data:data,postUrl:postUrl});
})

//新增表单提交页面
router.post('/create',function(req,res){
	console.log(req.body);

	var arr = dal.getData();
	var blog = {};
	blog = req.body;
	var now = new Date();
	blog.id = now.getTime();
	blog.create_time = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate() + " "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
	blog.view_times = 0;
	arr.push(req.body);
	fs.writeFileSync('./data/blogs.json',JSON.stringify(arr));
	res.redirect('/admin/blog');
})

//修改表单提交页面
router.post('/update/:id',function(req,res){
	dal.updateOne(req.params.id,req.body);
	res.redirect('/admin/blog');	
})

//删除表单提交页面
router.post('/delete',function(req,res){
	dal.delByID(req.body.id);
	res.redirect('/admin/blog');
})


module.exports = router;
