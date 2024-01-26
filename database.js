const Sequelize=require('sequelize');
const Sequelize=new Sequelize('node-complete','root','node-complete',{
dialect:'mysql',
host:'localhost'
});
module.exports=sequelize;