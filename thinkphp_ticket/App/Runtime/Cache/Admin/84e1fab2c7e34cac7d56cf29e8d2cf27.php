<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Vipuser/update/navTabId/vipuserlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="list" layoutH="160">
			<dl>
				<dt>账号：</dt>
				<dd><?php echo ($vo["account"]); ?></dd>
			</dl>
            <dl>
				<dt>真实姓名：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="name" value="<?php echo ($vo["name"]); ?>"/></dd>
			</dl>
			<dl>
				<dt>头像：</dt>
				<dd><input type="file"  size="10" style="width:30%" name="pic"/><img src="/thinkphp_ticket/Public/Uploads/vipuser/<?php echo ($vo["picname"]); ?>">
					</dd>
			</dl>
			<dl>
				<dt>邮箱：</dt>
				<dd><input type="text" class="email" size="10" style="width:30%" value="<?php echo ($vo["email"]); ?>" name="email"/></dd>
			</dl>
			<dl>
				<dt>电话：</dt>
				<dd><input type="text" class="phone" size="10" style="width:30%" value="<?php echo ($vo["phone"]); ?>" name="phone"/></dd>
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