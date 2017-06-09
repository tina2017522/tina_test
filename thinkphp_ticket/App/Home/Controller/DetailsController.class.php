<?php
namespace Home\Controller;
use Think\Controller;
class DetailsController extends Controller{
   

	public function index()
	{
		//获取电影详情
    	$mod = M("Film");
    	$this->assign("films",$mod->find($_GET['id']));
  
    	//获取电影院
    	$mod1 = M("projection");
    	$cinemas = $mod1->where("fid={$_GET['id']}")->field("cid")->select();

    	foreach($cinemas as $v){
    		//dump($v);
    		$cinema_value[]= M("Cinema")->find($v['cid']);
    	}

    	$this->assign("cinemas2",$cinema_value);


        $mod3 = M("projection");
        $this->assign("projections",$mod3->where("fid={$_GET['id']}"));

        parent::index();
		//$this->display("index");
	}


    public function referAjax($fid,$cid)
    {
        $this->assign("cid",M("Cinema")->find($cid));
        $ft = M("Projection")->where("fid={$fid} AND cid={$cid}")->select();

        foreach($ft as &$vo){
            $ht=M("Hall")->field('title')->find($vo['hid']);
            $lt=M("Film")->field("language")->find($vo['fid']);
            $vo['htitle']=$ht['title'];
            $vo['language']=$lt['language'];
        }
        $this->assign("ft",$ft);
        $this->display("pro");
    }



//查数据方法
	public function csj($dat)
	{
		//打开1.txt执行清空写
		$f=fopen("./1.txt","w");
		fwrite($f,json_encode($dat));
		
		fclose($f);

	}
}