<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Hall/insert/navTabId/halllist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<div class="pageFormContent" layoutH="60">
			<dl>
				<dt>放映厅名称：</dt>
				<dd><input type="text" class="required"  style="width:100%" name="title"/></dd>
			</dl>
			
			<dl>
				<dt>所属影院：</dt>
				<dd><select name="cid">
					<?php if(is_array($cids)): foreach($cids as $key=>$vo): ?><option value="<?php echo ($vo["id"]); ?>"><?php echo ($vo["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>

			<dl>
				<dt>放映厅类型：</dt>
				<dd><select name="htype">
					<?php if(is_array($htlist)): foreach($htlist as $key=>$title): ?><option value="<?php echo ($key); ?>"><?php echo ($title); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
			<dl>
				<dt>座位数：</dt>
				<dd><input type="text" name="number"/></dd>
			</dl>
			
            <dl>
				<dt>座位布局：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="layout"/></dd>
			</dl>

		</div>
		
		<div class="formBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button type="submit">保存</button></div></div></li>
				<li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
			</ul>
		</div>
	</form>
</div>