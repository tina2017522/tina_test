<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Cinema/update/navTabId/cinemalist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="table" layoutH="160">
			<!-- <dl>
				<dt>ID:</dt>
				<dd><?php echo ($vo["id"]); ?></dd>
			</dl> -->
            <dl>
				<dt>影院名称：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="title" value="<?php echo ($vo["title"]); ?>"/></dd>
			</dl>
			<dl>
				<dt>图片：</dt>
				<dd><input type="file"  size="10" style="width:30%" name="pic"/><img src="/thinkphp_ticket/Public/Uploads/cinema/<?php echo ($vo["picname"]); ?>">
					</dd>
			</dl>
			<dl>
				<dt>联系电话：</dt>
				<dd><input type="text" class="required" size="10" style="width:30%" value="<?php echo ($vo["phone"]); ?>" name="phone"/></dd>
			</dl>
			<dl>
				<dt>影院地址：</dt>
				<dd><input type="text" class="required" size="10" style="width:30%" value="<?php echo ($vo["address"]); ?>" name="address"/></dd>
			</dl>
            <dl>
				<dt>影院服务：</dt>
				<dd><input type="text" class="required" size="10" style="width:30%" value="<?php echo ($vo["service"]); ?>" name="service"/></dd>
			</dl>
			<dl>
				<dt>简介：</dt>
				<dd><input type="text" class="required" size="10" style="width:30%" value="<?php echo ($vo["introduction"]); ?>" name="introduction"/></dd>
			</dl>
			<dl>
				<dt>添加时间：</dt>
				<dd><input type="text" size="10" style="width:30%" value="<?php echo ($vo["addtime"]); ?>" name="addtime"/></dd>
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