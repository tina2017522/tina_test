<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Hall/update/navTabId/halllist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return validateCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
		<input type="hidden" value="<?php echo ($vo["cid"]); ?>" name="cids"/>
        <div class="pageFormContent" layoutH="160">
            <dl>
				<dt>放映厅名称：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="title" value="<?php echo ($vo["title"]); ?>"/></dd>
			</dl>
			
			<dl>
				<dt>座位数：</dt>
				<dd><input type="text" style="width:30%" name="number" value="<?php echo ($vo["number"]); ?>"/></dd>
			</dl>

			<dl>
			<dt>所属影院：</dt>
			<dd><select name="cid">
				<?php if(is_array($cids)): foreach($cids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["cid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
			</select></dd>
		</dl>
			
			<!-- <dl>
				<dt>所属影院：</dt>
				<dd><select name="cid">
					<?php if(is_array($cids)): foreach($cids as $key=>$vd): ?><option value ='$vd.title'
							 if($vd.id == $vo.cid){
								 selected ='$vd.title';
							}
						><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl> -->
			



			<dl>
				<dt>放映厅类型：</dt>
				<dd><select name="htype">
					<?php if(is_array($htlist)): foreach($htlist as $key=>$title): ?><option <?php if(($key) == $vo["htype"]): ?>selected<?php endif; ?> value="<?php echo ($key); ?>"><?php echo ($title); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
			<!-- <dl>
				<dt>放映厅类型：</dt>
				<dd><select name="htype">
					<?php if(is_array($htlist)): foreach($htlist as $key=>$title): ?><option value="<?php echo ($key); ?>"><?php echo ($title); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl> -->
			<dl>
				<dt>座位布局：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="layout" value="<?php echo ($vo["layout"]); ?>"/></dd>
			</dl>
		
		<div class="formBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button type="submit">修改</button></div></div></li>
				<li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
			</ul>
		</div>
	</form>
</div>