<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Vipuser/insert/navTabId/vipuserlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
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
			<!-- <dl>
				<dt>头像:</dt>
				<dd><input type="file" size=10 class="required" style="width:100%" name="pic"/></dd>
			</dl> -->
			<dl>
				<dt>头像：</dt>
				<dd><input type="file"  size="10" style="width:100%" name="pic"/></dd>
			</dl>
			
            <dl>
				<dt>真实姓名：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="name"/></dd>
			</dl>
			<dl>
				<dt>邮箱：</dt>
				<dd><input type="text" class="email" size="10" style="width:100%" name="email"/></dd>
			</dl>
			<dl>
				<dt>电话：</dt>
				<dd><input type="text" class="phone" size="10" style="width:100%" name="phone"/></dd>
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