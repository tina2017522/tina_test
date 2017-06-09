<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Projection/update/navTabId/projectionlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="pageFormContent" layoutH="160">
			<dl>
				<dt>账号：</dt>
				<dd><?php echo ($vo["id"]); ?></dd>
			</dl>

		<dl>	
			<dt>影片名称</dt>
			<dd><select name="fid">
				<?php if(is_array($fids)): foreach($fids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["fid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
			</select></dd>
		</dl>
		
		<dl>	
			<dt>电影院名称：</dt>
			<dd><select name="cid">
				<?php if(is_array($cids)): foreach($cids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["cid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
			</select></dd>
		</dl>	

		<dl>	
			<dt>放映厅名称：</dt>
			<dd><select name="hid">
				<?php if(is_array($hids)): foreach($hids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["hid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
			</select></dd>
		</dl>	
			
			<dl>
				<dt>放映日期：</dt>
				<dd><input type="text" name="date" class="date" value="<?php echo ($vo["date"]); ?>" /><a class="inputDateButton" href="#">选择</a></dd>
			</dl>
			 
			 <dl>
				<label>放映时间：</label>
				<input type="text" name="time" class="date" dateFmt="HH:mm" value="<?php echo ($vo["time"]); ?>" mmStep="15" readonly="true"/>
				<a class="inputDateButton" href="javascript:;">选择</a>
			</dl>
			 <dl>
				<dt>价格：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="price" value="<?php echo ($vo["price"]); ?>"/></dd>
			</dl>
			
			<dl>	
			<dt>语言版本</dt>
			<dd><select name="language">
				<?php if(is_array($fids)): foreach($fids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["fid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["language"]); ?></option><?php endforeach; endif; ?>
			</select></dd>
		</dl>	

			 <dl>
				<dt>座位信息:</dt>
				<dd><input type="text"  size="10" style="width:30%" name="seatinfo" value="<?php echo ($vo["seatinfo"]); ?>"/></dd>
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