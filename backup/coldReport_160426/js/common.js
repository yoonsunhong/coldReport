$(document).ready(function (){
	
	$(window).on('resize',function  () {
		
			var w = $(window).width();
			var h = $(window).height();
			var bannerWid = $(".banner").outerWidth();
			var bannerRWid = $(".ban_r").outerWidth();
			var sideAreaWid = $(".side_area").outerWidth();
			var typeArea = w-sideAreaWid-74;
			var borBg = $(".bor_bg").outerWidth();
			var subCnt = $(".sub_cnt").outerWidth();
			var subCntH = $(".sub_cnt").outerHeight();

			$("#content").height( h  )

			
			/* 로그인, 비밀번호 변경 */
			$("#mainContent").height(h-47);

			/*==========----- frame1 -----==========*/
			$(".frame1_cnt").width ( w )
			$(".cnt81 .menu_right").width(  w-353 );
			$(".cnt81 #tabTree1").height( h-140 );

			/*==========----- frame2 -----==========*/
			/* 배너 영역 */
			$("#snb").height( subCntH + 1);
			$(".ban_cnt").height( subCntH - 74 );
			$(".tree34").height( subCntH - 290 );

			$(".cnt41 .list1, .cnt41 .bor_bg").width( subCnt-70 );
			$(".cnt41 .grid_area, .cnt41 .grid_area .ui-jqgrid, .cnt41 .grid_area .ui-jqgrid-bdiv, .cnt41 .grid_area .ui-corner-bottom, .cnt41 .grid_area .ui-jqgrid-htable, .cnt41 .grid_area .ui-jqgrid-labels, .cnt41 .grid_area .ui-jqgrid-hbox, .cnt41 .grid_area .ui-jqgrid-view, .cnt41 .grid_area .ui-jqgrid-hdiv, .cnt41 .grid_area .ui-jqgrid-htable thead, .cnt41 .ui-jqgrid-btable, .cnt41 #ajaxProwed1").width( $(".cnt41 .list1").width()-290 );
			$(".cnt43 .truck_txt div").width( subCnt-378 );
			$(".cnt43 .truck").height( subCntH - 146 );
			$(".cnt51 .enroll_area").width( subCnt-352 );

			/*==========----- frame3 -----==========*/
			$(".frame3_cnt .cnt_area").width( subCnt - 283 )

			$(".cnt42 .scroll_box").width(subCnt - 287);
			$(".cnt42 .scroll_box").height(subCntH - 58);

			/* 오른쪽 고정 배너 영역 */
			$(".ban_r").height( subCntH + 1 );

			$(".ban_r .list1 ul, .ban_r .list2 ul").height( ( subCntH - 148 ) / 2 );
			$(".ban_r .list2").css({ top: subCntH / 2 });

			if ( $(".ban_r").height() <= 583  ) {
				$(".ban_r .list2").css({top:"291.5px"});
				$(".ban_r").height( 583 );
				$(".ban_r .list1 ul").height( 217 );
			}

			/*==========----- frame4 -----==========*/
			$(".frame4_cnt .cnt_area").height( subCntH - 384 )

			$(".graph").width ( subCnt-15 );
			$(".graph_area").width ( subCnt-50 );
			$(".graph_tit").width ( subCnt-30 );

/*
			//$(".frame2_cnt").width ( w-44 );
			$(".cnt21 .cnt_area").width( subCnt-62 )
			$(".cnt22 .map_area").width ( subCnt-345 )
			$(".cnt34 .list1, .cnt34 .list1 .map_area").width( subCnt-382 )
			$(".cnt35 .map_area").width( subCnt-724 )
	
*/





			


				if ( w >= 1280 ) { 
					
					$(".type_area .grid_area").width(typeArea) // 여닫기 없는 콘텐츠 영역에서의 그리드 영역
					$(".cnt82 .menu_info, .cnt82 .menu_info .grid_area, .cnt82 .menu_info .grid_area .ui-jqgrid, .cnt82 .menu_info .grid_area .ui-jqgrid-bdiv, .cnt82 .menu_info .grid_area.ui-corner-bottom, .cnt82 .menu_info .grid_area .ui-jqgrid-htable, .cnt82 .menu_info .grid_area .ui-jqgrid-labels, .cnt82 .menu_info .grid_area .ui-jqgrid-hbox, .cnt82 .menu_info .grid_area .ui-jqgrid-view, .cnt82 .menu_info .grid_area .ui-jqgrid-hdiv, .cnt82 .menu_info .grid_area .ui-jqgrid-htable thead, .cnt82 .menu_info #ajaxProwed1").width( w-354 );
	

				} else {
					$(".type_area .grid_area").width(927) // 여닫기 없는 콘텐츠 영역에서의 그리드 영역
					$(".cnt82 .menu_info, .cnt82 .menu_info .grid_area, .cnt82 .menu_info .grid_area .ui-jqgrid, .cnt82 .menu_info .grid_area .ui-jqgrid-bdiv, .cnt82 .menu_info .grid_area.ui-corner-bottom, .cnt82 .menu_info .grid_area .ui-jqgrid-htable, .cnt82 .menu_info .grid_area .ui-jqgrid-labels, .cnt82 .menu_info .grid_area .ui-jqgrid-hbox, .cnt82 .menu_info .grid_area .ui-jqgrid-view, .cnt82 .menu_info .grid_area .ui-jqgrid-hdiv, .cnt82 .menu_info .grid_area .ui-jqgrid-htable thead, .cnt82 .menu_info #ajaxProwed1").width( 925 );
				}
					
	});
	$(window).trigger('resize');		

});

