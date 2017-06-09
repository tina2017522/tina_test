<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends CommonController
{
    public function index()
    {
    	$film = M("Film");
    	$this->assign("films",$film->select());
        

        $this->display("index");
    }


}