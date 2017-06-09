<?php
namespace Home\Controller;

class VipuserController extends CommonController
{
   //追加搜索条件
   //追加搜索条件
    public function _filter($map)
    {
        //封装搜索条件
        if(!empty($_REQUEST['tina'])){
            $where['account']=array("like","%{$_REQUEST['tina']}%");
            $where['name']=array("like","%{$_REQUEST['tina']}%");
            $where['_logic']="or";
            $map['_complex']=$where;
        }
       return $map;
    }

    public function insert()
    {
       // dump($_FILES[]);die;
        $this->doUpload();
        parent::insert();
    }

    public function update()
    {
        $vip = D("vipuser");
        $data=$vip->find($_GET['id']);
        if($_FILES['pic'][error]!=4){
            $this->doUpload();
            unlink("./Public/Uploads/vipuser/{$data['picname']}");
            unlink("./Public/Uploads/vipuser/min/s_{$data['picname']}");
        }
        parent::update();

    }

    public function del()
    {
    	$vip = D("vipuser");
    	$data=$vip->find($_GET['id']);
       //dump($data);
    	unlink("./Public/Uploads/vipuser/{$data['picname']}");
    	unlink("./Public/Uploads/vipuser/min/s_{$data['picname']}");
    	parent::del();
    }
    
    //执行上传
    private  function doUpload()
    {
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728 ;// 设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg');//设置附件上传类型
        $upload->rootPath  = './Public/Uploads/vipuser/'; // 设置附件上传目录
        $upload->autoSub = false; //拒绝创建子目录
        // 上传文件
        $info = $upload->upload();
        //$sstr  = json_encode($info);
        //file_put_contents('./text.txt',$sstr);//die();
        //dump($info);
        //die;
        //准备返回的数据格式
        //$res = array("err"=>"","msg"=>"");
        if(!$info){
            // 上传错误提示错误信息
            $this->error($upload->getError());
        }else{
            // 上传成功
            //$this->success('上传成功！');
            foreach($info as $file){
                //获取成功的图片名
                $picname = $file['savename'];
                //生成缩略图片
                $image = new \Think\Image();
                $image->open('./Public/Uploads/vipuser/'.$picname);
                //按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.jpg
                $image->thumb(70,70)->save('./Public/Uploads/vipuser/'.$picname);
                $image->thumb(300,400)->save('./Public/Uploads/vipuser/max/m_'.$picname);
                //将图片信息放到res
                $_POST['picname']=$picname;
            }
            return true;
        }
    }
   
}