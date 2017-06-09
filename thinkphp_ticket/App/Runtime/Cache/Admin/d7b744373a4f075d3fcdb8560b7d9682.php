<?php if (!defined('THINK_PATH')) exit();?>
<div class="pageContent">
	<form method="post"  action="/thinkphp_ticket/index.php/Admin/Projection/insert/navTabId/projectionlist/callbackType/closeCurrent"  class="pageForm required-validate" 
		onsubmit="return iframeCallback(this,dialogAjaxDone);"><?php  ?>
		<div class="pageFormContent" layoutH="60">
			<dl>
				<dt>影片名称:</dt>
				<dd><select name="fid">
					<?php if(is_array($fids)): foreach($fids as $key=>$vo): ?><option value="<?php echo ($vo["id"]); ?>"><?php echo ($vo["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
		<dl>
				<dt>电影院名称:</dt>
				<dd><select name ="cid" id="cid">
					<?php if(is_array($cids)): foreach($cids as $key=>$ho): ?><option value="<?php echo ($ho["id"]); ?>"><?php echo ($ho["title"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
			
		 						<!-- <dt>放映厅名称:</dt>
		 						<dd><select name="hid">
		 							<?php if(is_array($hids)): foreach($hids as $key=>$vo): ?><option value="<?php echo ($vo["id"]); ?>"><?php echo ($vo["title"]); ?></option><?php endforeach; endif; ?>
		 						</select></dd>
		 								 					</dl>
		 								 	 -->
		  
	<script>
         $(function(){
         	$("#cid").change(function(){
          	var cidValue = $(this).val();
          	//alert(cidValue);
          	myLoad(cidValue);
          });
         });
           
           function myLoad(id){
               //加城市信息
              // alert(aa);
               $.ajax({
                      url:"/thinkphp_ticket/index.php/Admin/Projection/adds",
                     type:'get',
                     data:'id='+id,
                 dataType:"html",
                success:function(data){
                	//alert(data);
                	if(data==null){
                		return;
                	}
                	$("#hid option").remove();
                	$("#hid").append(data);
                }              
                 });
           }
        </script>

		<dl>
				<dt>放映厅名称:</dt>
				<dd >
					<select name="hid" id="hid"></select>
				</dd>
			</dl>
		 	<dl>


			

            <dl>
				<dt>放映日期：</dt>
				<dd><input type="text" name="date" class="date" value="<?php echo date('Y-m-d',time());?>" /><a class="inputDateButton" href="#">选择</a></dd>
			</dl>
			 <dl>
				<label>放映时间：</label>
				<input type="text" name="time" class="date" dateFmt="HH:mm" value="<?php echo date('H:m',time());?>" mmStep="15" readonly="true"/>
				<a class="inputDateButton" href="javascript:;">选择</a>
			</dl>
			<dl>
				<dt>价格:</dt>
				<dd><input type="text"  size="10" style="width:100%" name="price"/></dd>
			</dl>
			
			<dl>
				<dt>语言版本:</dt>
				<dd><select name="language">
					<?php if(is_array($fids)): foreach($fids as $key=>$vo): ?><option value="<?php echo ($vo["id"]); ?>"><?php echo ($vo["language"]); ?></option><?php endforeach; endif; ?>
				</select></dd>
			</dl>
			<dl>
				<dt>座位信息:</dt>
				<dd><input type="text"  size="10" style="width:100%" name="seatinfo"/></dd>
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