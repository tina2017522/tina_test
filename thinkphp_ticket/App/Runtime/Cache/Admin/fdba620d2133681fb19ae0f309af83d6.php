<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" action="/thinkphp_ticket/index.php/Admin/Users/update/navTabId/userslist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return validateCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="pageFormContent" layoutH="60">
			<dl>
				<dt>账号：</dt>
				<dd><?php echo ($vo["account"]); ?></dd>
			</dl>
            <dl>
				<dt>真实姓名：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="name" value="<?php echo ($vo["name"]); ?>"/></dd>
			</dl>
			<dl>
				 <dl>
				<dt>角色：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="name" value="<?php echo ($vo["role"]); ?>"/></dd>
			</dl>
            <dl>
				<dt>状态：</dt>
				<dd><input type="radio" value="0" <?php if(($vo["status"]) == "0"): ?>checked<?php endif; ?> name="status"/>启用
                    <input type="radio" value="1" <?php if(($vo["status"]) == "1"): ?>checked<?php endif; ?> name="status"/>禁用</dd>
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