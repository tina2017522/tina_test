<?php
namespace Home\Controller;

class ProjectionController extends CommonController
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

    public function add()
    {
        $this->assign("fids",M("Film")->field('id,title,language')->select());
        $this->assign("hids",M("Hall")->field('id,title')->select());
        parent::add();
    }


     public function edit()
    {
        $this->assign("fids",M("Film")->field('id,title,language')->select());
        $this->assign("hids",M("Hall")->field('id,title')->select());
        parent::edit();
    }

    public function insert()
    {
       
        parent::insert();
    }

      //为查询结果再次追加其他信息(影院名,放映厅名，语言版本) 是为了首页遍历显示
   /* public function _tigger_list(&$list)
    {
        $mod = M("Film");
        foreach($list as &$item){
            $vo = $mod->field("title,language")->find($item['fid']);
            $item['ftitle'] = $vo['title'];
            $item['flanguage'] = $vo['language'];

        $mod1= M("Hall");
        foreach($list as &$item){
            $vo = $mod1->field("title")->find($item['hid']);
            $item['htitle'] = $vo['title'];
        }


    }    
}
*/

public function _tigger_list(&$list)
    {
        $mod = M("Film");
        $mod1= M("Hall");
        foreach($list as &$item){
            $vo = $mod->field("title,language")->find($item['fid']);
            $vd = $mod1->field("title")->find($item['hid']);
            $item['ftitle'] = $vo['title'];
            $item['flanguage'] = $vo['language'];
            $item['htitle'] = $vd['title'];
     


    }    
}
   
}