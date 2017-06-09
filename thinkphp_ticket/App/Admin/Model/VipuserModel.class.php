<?php
namespace Admin\Model;

use Think\Model;
// 用户模型
class VipuserModel extends Model{
    //自动验证
	public $_validate	=	array(
		array('account','/^[a-z]\w{3,}$/i','帐号格式错误,由字母数字下划线构成'),
		array('pass','require','密码必须填写'),
		array('name','require','真实姓名必须填写'),
		//array('repassword','require','确认密码必须'),
		//array('repassword','password','确认密码不一致',0,'confirm'),
		array('account','','帐号已经存在',0,'unique',self::MODEL_INSERT),
		);
    
    //自动完成(填充数据)
	public $_auto =	array(
		array('pass','pwdHash',self::MODEL_BOTH,'callback'),
		array('status',0,self::MODEL_INSERT),
		array('addtime','time',self::MODEL_INSERT,'function'),
		array('lasttime','time',self::MODEL_INSERT,'function'),
		);

	protected function _before_update(&$data,$options) {
		
		//$data->create(); // 生成数据对象
		$data['addtime'] = NOW_TIME; // 增加register_time属性
	}
	
	protected function pwdHash() {
		if(isset($_POST['pass'])) {
			return md5($_POST['pass']);
		}else{
			return false;
		}
	}
}