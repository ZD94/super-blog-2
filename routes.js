/**
 * Created by Administrator on 2017/5/9.
 */
const express=require('express')
const router=express.Router()
const home=require('./routes/home')
//首页
router.get('/',home.index)




module.exports=router