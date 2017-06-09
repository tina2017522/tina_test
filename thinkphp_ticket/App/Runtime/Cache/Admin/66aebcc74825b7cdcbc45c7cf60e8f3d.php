<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Film/update/navTabId/filmlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<input type="hidden" value="<?php echo ($vo["id"]); ?>" name="id"/>
        <div class="list" layoutH="160">
			<dl>
				<dt>账号：</dt>
				<dd><?php echo ($vo["id"]); ?></dd>
			</dl>
			
			<dl>
				<dt>影片名称：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="title" value="<?php echo ($vo["title"]); ?>"/></dd>
			</dl>
			
			<dl>
				<dt>图片：</dt>
				<dd><input type="file"  size="10" style="width:30%" name="pic"/><img src="/thinkphp_ticket/Public/Uploads/film/<?php echo ($vo["picname"]); ?>">
					</dd>
			</dl>
			

            <dl>
				<dt>所属类型：</dt>
				<dd><select name="fid">
					<?php if(is_array($fids)): foreach($fids as $key=>$vd): ?><option <?php if(($vd["id"]) == $vo["cid"]): ?>selected<?php endif; ?> value="<?php echo ($vd["id"]); ?>"><?php echo ($vd["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
			 
			  <dl>
				<dt>首映时间：</dt>
				<dd><input type="text" name="firsttime" class="date" readonly="true"/>
				<a class="inputDateButton" href="javascript:;">选择</a></dd>
			</dl>

			 <dl>
				<dt>时长：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="duration" value="<?php echo ($vo["duration"]); ?>"/></dd>
			</dl>

			 <dl>
				<dt>导演：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="director" value="<?php echo ($vo["director"]); ?>"/></dd>
			</dl>

			 <dl>
				<dt>主演阵容：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="actor" value="<?php echo ($vo["actor"]); ?>"/></dd>
			</dl>
		
			<dl>
				<dt>放映地区：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="region" value="<?php echo ($vo["region"]); ?>"/></dd>
			</dl>

			<dl>
				<dt>语言版本:</dt>
				<dd><input type="text"  size="10" style="width:100%" name="language" value="<?php echo ($vo["language"]); ?>"/></dd>
			</dl>

			<dl>
				<dt>评分：</dt>
				<dd><input type="text"  size="10" style="width:30%" name="score" value="<?php echo ($vo["score"]); ?>"/></dd>
			</dl>

			<dl>
				<dt>简介,描述：</dt>
				<dd><textarea rows="7"  tools="mini" cols="50" name="introduction"><?php echo ($vo["introduction"]); ?></textarea> </dd>
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