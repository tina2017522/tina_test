<?php
namespace Admin\Model;

use Think\Model;
// 用户模型
class FilmtypeModel extends Model{     
    //添加数据时候自动完成(填充数据)
	public $_auto =	array(
		//array('pass','pwdHash',self::MODEL_BOTH,'callback'),
		//array('status',0,self::MODEL_INSERT),
		array('addtime','time',self::MODEL_INSERT,'function'),
		); 

	
	protected function _before_update(&$data,$options) {
		
		//$data->create(); // 生成数据对象
		$data['addtime'] = NOW_TIME; // 增加register_time属性
	}

}