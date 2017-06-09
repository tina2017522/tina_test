<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" action="/thinkphp_ticket/index.php/Admin/Users/insert/navTabId/userslist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return validateCallback(this,dialogAjaxDone);"><?php  ?>
		<div class="pageFormContent" layoutH="60">
			<dl>
				<dt>账号：</dt>
				<dd><input type="text" class="required"  style="width:100%" name="account"/></dd>
			</dl>
			<dl>
				<dt>密码：</dt>
				<dd><input  type="password" class="required" id="mypassid"  style="width:100%" name="pass"/></dd>
			</dl>
			<dl>
				<dt>重复密码：</dt>
				<dd><input type="password" class="required" equalto="#mypassid"  style="width:100%" name="repass"/></dd>
			</dl>
            <dl>
				<dt>真实姓名：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="name"/></dd>
			</dl>
			<dl>
				<dt>角色：</dt>
				<dd><input type="text" class="role" size="10" style="width:100%" name="role"/></dd>
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