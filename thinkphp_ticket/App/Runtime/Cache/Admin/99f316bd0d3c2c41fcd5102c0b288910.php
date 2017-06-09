<?php if (!defined('THINK_PATH')) exit();?><form id="pagerForm" action="/thinkphp_ticket/index.php/Admin/Film/index" method="post">
	<input type="hidden" name="pageNum" value="<?php echo ((isset($currentPage) && ($currentPage !== ""))?($currentPage):'1'); ?>" />
	<input type="hidden" name="numPerPage" value="<?php echo ($numPerPage); ?>" /><!--每页显示多少条-->
	<input type="hidden" name="_order" value="<?php echo ($_REQUEST['_order']); ?>"/>
	<input type="hidden" name="_sort" value="<?php echo ($_REQUEST['_sort']); ?>"/>
</form>
<div class="pageHeader">
	<form rel="pagerForm" onsubmit="return navTabSearch(this);" method="post">
	<input type="hidden" name="numPerPage" value="<?php echo ($numPerPage); ?>" /><!--每页显示多少条-->
	<div class="searchBar">
		<table class="searchContent">
			<tr>
				<!-- <td>
					<b>搜索</b> &nbsp; 关键字：<input type="text" name="keword" value="<?php echo ($_POST['keword']); ?>" /> 账号,姓名 
				</td> -->


				<td>
					<!-- //name要和控制器里搜索方法里的名字一样，a也是自定义 -->
					<b>搜索</b> &nbsp; 关键字：<input type="text" name="tina" value="<?php echo ($_POST['aa']); ?>" /> <姓名，账号
				</td>
				<td>
					<div class="buttonActive"><div class="buttonContent"><button type="submit">检索</button></div></div>
				</td>
			</tr>
		</table>
	</div>
	</form>
</div>
<div class="pageContent">
	<div class="panelBar">
		<ul class="toolBar">
			<li><a class="add" href="/thinkphp_ticket/index.php/Admin/Film/add" target="dialog" width="550" height="380" rel="user_msg" title="添加会员信息"><span>添加</span></a></li>
			<li><a class="delete" href="/thinkphp_ticket/index.php/Admin/Film/del/id/<?php echo (C("TMPL_L_DELIM")); ?>item_id<?php echo (C("TMPL_R_DELIM")); ?>/navTabId/filmlist" target="ajaxTodo" title="确定要删除吗?"><span>删除</span></a></li>
			<li><a class="edit" href="/thinkphp_ticket/index.php/Admin/Film/edit/id/<?php echo (C("TMPL_L_DELIM")); ?>item_id<?php echo (C("TMPL_R_DELIM")); ?>"  width="550" height="380" target="dialog"><span>修改</span></a></li>
			<li class="line">line</li>
			<li><a class="icon"  href="javascript:navTabPageBreak()"><span>刷新</span></a></li>
			<!--<li><a class="icon" href="demo/common/dwz-team.xls" target="dwzExport" targetType="navTab" title="实要导出这些记录吗?"><span>导出EXCEL</span></a></li>-->
		</ul>
	</div>
	<table class="list" width="100%" layoutH="112">
		<thead>
			<tr>
				<th width="40"   orderField="id" >ID</th>
				<th width="150"  orderField="title">影片名称</th>
				<th width="150">图片名称</th>
				<th width="150">影片类型</th>
				<th width="150">首映时间</th>
				<th width="150">时长</th>
				<th width="150">导演</th>
				<th width="150">主演阵容</th>
				<th width="150">语言版本</th>
				<th width="150">放映地区</th>
				<th width="150">评分</th>
				<th width="150">简介,描述</th>
				<th width="150">状态</th>
				<th width="150">添加时间</th>
			</tr>
		</thead>
		<tbody>
			<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr target="item_id" rel="<?php echo ($vo["id"]); ?>">
					<td><?php echo ($vo["id"]); ?></td>
					<td><?php echo ($vo["title"]); ?></td>
					<!-- <td><img src="/thinkphp_ticket/Public/Uploads/<?php echo ($vo["picname"]); ?>"/></td> -->
					<td><img style="width:50px" src="/thinkphp_ticket/Public/Uploads/film/<?php echo ($vo["picname"]); ?>"/></td>
					<td><?php echo ($vo["ftitle"]); ?></td>
					<td><?php echo ($vo["firsttime"]); ?></td>
					<td><?php echo ($vo["duration"]); ?></td>
					<td><?php echo ($vo["director"]); ?></td>
					<td><?php echo ($vo["actor"]); ?></td>
					<td><?php echo ($vo["region"]); ?></td>
					<td><?php echo ($vo["language"]); ?></td>
					<td><?php echo ($vo["score"]); ?></td>
					<td><?php echo (mb_substr(strip_tags(htmlspecialchars_decode($vo["introduction"])),0,10)); ?>...</td>
					<td><?php echo ($vo["status"]); ?></td>
					<td><?php echo (date("Y-m-d H:i:s",$vo["addtime"])); ?></td>
                </tr><?php endforeach; endif; else: echo "" ;endif; ?>
		</tbody>
	</table>
	<div class="panelBar">
		<div class="pages">
			<span>显示</span>
			<select class="combox" name="numPerPage" onchange="navTabPageBreak(<?php echo (C("TMPL_L_DELIM")); ?>numPerPage:this.value<?php echo (C("TMPL_R_DELIM")); ?>)">
				<option value="5" <?php if($numPerPage == 5): ?>selected<?php endif; ?>>5</option>
				<option value="10" <?php if($numPerPage == 10): ?>selected<?php endif; ?>>10</option>
				<option value="15" <?php if($numPerPage == 15): ?>selected<?php endif; ?>>15</option>
				<option value="20" <?php if($numPerPage == 20): ?>selected<?php endif; ?>>20</option>
				<option value="25" <?php if($numPerPage == 25): ?>selected<?php endif; ?>>25</option>
				<option value="30" <?php if($numPerPage == 30): ?>selected<?php endif; ?>>30</option>
			</select>
			<span>共<?php echo ($totalCount); ?>条</span>
		</div>
		<div class="pagination" targetType="navTab" totalCount="<?php echo ($totalCount); ?>" numPerPage="<?php echo ($numPerPage); ?>" pageNumShown="5" currentPage="<?php echo ($currentPage); ?>"></div>
	</div>
</div>