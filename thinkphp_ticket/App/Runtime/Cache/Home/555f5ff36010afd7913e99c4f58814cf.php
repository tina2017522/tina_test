<?php if (!defined('THINK_PATH')) exit();?><div class="orangeLine" id="ticketHead">
	<h3><a href="#" id="ticketCinemaName"><strong><?php echo ($cid["title"]); ?></strong></a>
		<span class="score" style="vertical-align:middle;">7.<em class="s">0</em></span>
		<span class="icon_z"></span>
		<span class="icon_q"></span>
		<span class="icon_t" style="display:none;"></span>
		<span class="mtype_imax" style="display:none;"></span>
	</h3>
	<div class="add">地址：<?php echo ($cid["address"]); ?>
		<a href="javascript:;" id="6100" title="查看地图" onclick="Core.cinemaMapDialog(this.id);">[查看地图]</a>
	</div>
</div>


<ul class="movie_s_tab" id="mvSubTabs">
	<li class="active" rel="#subPart1"><span class="seat">在线选座</span></li>
	<li rel="#subPart2" id="pqDhqTab" class=" other">
		<span class="new"></span><span class="dhq">兑换券/团购</span>
	</li>
</ul>
<div class="tab_border_bottom"></div>
<div class="movie_s_cont" id="subPart1" style="display:block;">

	<table class="cinemaAdd" width="100%" id="cnTbl">
		<thead>
		<tr>
			<th width="18%">放映时间</th>
			<th width="10%">
			                <span class="copy" id="dmspan">版本<b></b>
			                    <ul class="sel_copy" id="dmFilter">
			                        <li><a href="javascript:;"><span class="mtype_imax"></span></a></li>
			                        <li><a href="javascript:;"><span class="mtype mtype_2d"></span></a></li>
			                        <li><a href="javascript:;"><span class="mtype mtype_3d"></span></a></li>
			                        <li><a href="javascript:;"><span class="mtype mtype_4d"></span></a></li>
			                        <li><a href="javascript:;"><span class="mtype mtype_num"></span></a></li>
			                        <li><a href="javascript:;"><span class="mtype mtype_jp"></span></a></li>
			                    </ul>                                            	
			                </span></th>
			<th width="14%">语言</th>
			<th width="17%">放映厅</th>
			<th width="10%">选座预览</th>
			<th width="16%">原价/优惠价</th>
			<th width="15%">选座购票</th>
		</tr>
		</thead>
		<tbody id="movieTbody" class="movieTbodyAct">
		<?php var_dump($ft)?>
		<?php if(is_array($ft)): foreach($ft as $key=>$vo): ?><tr dm="2D" class="nobg">
				<td class="time"><?php echo ($vo["date"]); ?><br><span class="time_end">预计16:38结束</span></td>
				<td>2D</td>
				<td><?php echo ($vo["language"]); ?></td>
				<td><?php echo ($vo["htitle"]); ?></td>
				<td class="preview_seat">
					<div class="hallWrap" tid="591477312">
						<span class="hallShow"></span>
						<div class="hallBar"></div>
						<div class="hallTip">
							<i></i>
							<div class="load_text seat_box" seatload="false">
								<img src="./detail_files/loading2.gif" width="20" height="20" alt="">
								<div>加载中</div>
							</div>
						</div>
					</div>
				</td>
				<td>¥<em class="old">100</em><em class="fav ml10"><i>¥</i><?php echo ($vo["price"]); ?></em></td>
				<td>
					<a href="http://piao.163.com/order/seat.html?ticket_id=591477312&amp;seatArea=1"
					   class="btn_e34551 btn_89_29" rbtn="buy">选座购票</a>
				</td>
			</tr><?php endforeach; endif; ?>
		</tbody>
	</table>
	<!--放映信息-->
</div>