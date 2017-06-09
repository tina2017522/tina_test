<?php
namespace Admin\Controller;
use Think\Controller;
class PublicController extends Controller {

    //加载登录页面
    public function login(){
		$this->display("login");
	}
    
    //执行登录
    public function doLogin(){
        //验证验证码是否正确
        $verify = new \Think\Verify();
        if(!$verify->check($_POST['code'],"")){
            $this->assign("errorinfo","验证码错误！");
            $this->display("login");
            exit();
        }
        //执行账号登录验证
        $user = M("Users")->where("account='{$_POST['account']}'")->find();
        //判断是否获取登录用户信息
        if($user){
            //验证密码
            if(md5($_POST['pass'])==$user['pass']){
                //此处表示登录成功
                session("adminuser",$user); //放置登录信息                
                $this->redirect("Index/index"); //调整页面
            }else{
                $this->assign("errorinfo","登录密码错误！");
                $this->display("login");  
            }
        }else{
            $this->assign("errorinfo","登录账号错误！");
            $this->display("login");
        }
    
    }
    
    //执行退出
    public function logout(){
        unset($_SESSION['adminuser']); //销毁session
        $this->redirect("Public/login");
    }
    
    //加载验证码
    public function verify(){
        $verify = new \Think\Verify();
        $verify->fontSize = 20;
        $verify->length   = 2;
        $verify->useNoise = false;
        $verify->entry();

    }

}