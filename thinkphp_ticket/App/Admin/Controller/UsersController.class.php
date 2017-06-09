<?php
namespace Admin\Controller;

class UsersController extends CommonController
{
   public function Del()
   {
   	if($_GET['id']==1){
   		$this->error("超级管理员账号禁止删除");
   	}

   	parent::del();
   }

   //追加搜索条件
    public function _filter(&$map)
    {
        //封装搜索条件
        if(!empty($_REQUEST['keyword'])){
            $where['account']=array("like","%{$_REQUEST['keyword']}%");
            $where['name']=array("like","%{$_REQUEST['keyword']}%");
            $where['_logic']="or";
            $map['_complex']=$where;
        }
    }
}