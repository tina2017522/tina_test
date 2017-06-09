<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post" enctype="multipart/form-data" action="/thinkphp_ticket/index.php/Admin/Film/insert/navTabId/filmlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<div class="pageFormContent" layoutH="60">
			<dl>
				<dt>影片名称:</dt>
				<dd><input type="text"  style="width:100%" name="title"/></dd>
			</dl>
			<dl>
				<dt>图片名称：</dt>
				<dd><input  type="file" style="width:100%" name="pic"/></dd>
			</dl>

			<dl>
				<dt>影片类型</dt>
				<dd><select name="fid">
					<?php if(is_array($fids)): foreach($fids as $key=>$vo): ?><option value="<?php echo ($vo["id"]); ?>"><?php echo ($vo["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>

            <dl>
				<dt>首映时间：</dt>
				<dd><input type="text" name="firsttime" class="date" readonly="true"/>
				<a class="inputDateButton" href="javascript:;">选择</a></dd>
			</dl>
			<dl>
				<dt>时长：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="duration"/></dd>
			</dl>
			<dl>
				<dt>导演：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="director"/></dd>
			</dl>
			
			<dl>
				<dt>主演阵容：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="actor"/></dd>
			</dl>
			<dl>
				<dt>语言版本:</dt>
				<dd><input type="text"  size="10" style="width:100%" name="language"/></dd>
			</dl>
			<dl>
				<dt>放映地区：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="region"/></dd>
			</dl>
			<dl>
				<dt>评分：</dt>
				<dd><input type="text"  size="10" style="width:100%" name="score"/></dd>
			</dl>
			<dl>
				<dt>简介,描述：</dt>
				<dd><textarea rows="7" class="editor" tools="mini" cols="50" name="introduction"></textarea> </dd>
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