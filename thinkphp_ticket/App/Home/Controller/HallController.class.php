<?php
namespace Home\Controller;

class HallController extends CommonController
{   
    public function add()
    {
        $this->assign("htlist",C('HALL_TYPE_LIST'));
        $this->assign("cids",M("Cinema")->field('id,title')->select());
        parent::add();
    }
    
    //为查询结果再次追加其他信息(电影院名) 是为了首页遍历显示
    public function _tigger_list(&$list)
    {
        $mod = M("Cinema");
        foreach($list as &$item){
            $vo = $mod->field("title")->find($item['cid']);
            $item['ctitle'] = $vo['title'];
        }
    }    


    public function edit() 
    {
       $this->assign("htlist",C('HALL_TYPE_LIST'));
        $this->assign("cids",M("Cinema")->field('id,title')->select());

        parent::edit();
        
    }


}