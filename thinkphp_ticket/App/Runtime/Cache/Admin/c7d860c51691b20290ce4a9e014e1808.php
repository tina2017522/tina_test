<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" action="/thinkphp_ticket/index.php/Admin/Filmtype/update/navTabId/filmtypelist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return validateCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="pageFormContent" layoutH="60">
			<dl>
				<dt>ID：</dt>
				<dd><?php echo ($vo["id"]); ?></dd>
			</dl>
            
            <dl>
				<dt>影片类型：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="title" value="<?php echo ($vo["title"]); ?>"/></dd>
			</dl>
		</div>
		
		<div class="formBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button type="submit">修改</button></div></div></li>
				<li><div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div></li>
			</ul>
		</div>
	</form>
</div>