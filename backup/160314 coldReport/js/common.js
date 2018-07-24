$(document).ready(function (){
	
	$(window).on('resize',function  () {
		
			var w = $(window).width();
			var h = $(window).height();
			var bodyHeight=h-$("#header").outerHeight()-$("#footer").outerHeight()-54;
			console.log( $("#header").outerHeight() );
			console.log( $("#footer").outerHeight() );
			var titHei = $(".title").outerHeight();
			var treeHei1 = h-$("#header").outerHeight()-$("#footer").outerHeight()-titHei-93;    // 13 (sub_cnt의 padding-top)+ 36 (버튼의 outerHeight) + 34(menu_tit의 outerHeight)
			var graphArea = w-37;
			var bannerWid = $("#snb").outerWidth();
			var bannerWid = $(".banner").outerWidth();
			var banner3Wid = $(".banner3").outerWidth();
			var menustrucWid = $(".menu_struc").outerWidth();
			var menuInfoWid = w-menustrucWid-68;
			var frame2Tit = w-bannerWid;
			var sideAreaWid = $(".side_area").outerWidth();
			var table04Wid = w-bannerWid-sideAreaWid-220;
			var typeArea = w-sideAreaWid-74;
			var cnt52dl = $(".cnt52").outerWidth();
			var sideArea = $(".cnt22 .side_area").outerWidth();
			var borBg = $(".bor_bg").outerWidth();
			var subCnt = $("#subCnt").outerWidth();

			$(".frame1_cnt").width ( w-44 )
			$(".cnt21 .cnt_area").width( subCnt-64 )
			$(".cnt22 .map_area").width ( subCnt-64-281 )
			$(".cnt34 .list1").width( subCnt-64-318 )
			$(".cnt35 .map_area").width( subCnt-280-300-64 )
			$(".cnt41 .list1").width( subCnt-54 );
			$(".cnt41 .grid_area, .cnt41 .grid_area .ui-jqgrid, .cnt41 .grid_area .ui-jqgrid-bdiv, .cnt41 .grid_area.ui-corner-bottom, .cnt41 .grid_area .ui-jqgrid-htable, .cnt41 .grid_area .ui-jqgrid-labels, .cnt41 .grid_area .ui-jqgrid-hbox, .cnt41 .grid_area .ui-jqgrid-view, .cnt41 .grid_area .ui-jqgrid-hdiv, .cnt41 .grid_area .ui-jqgrid-htable thead, .cnt41 #ajaxProwed1").width( subCnt-220-144 );
			$(".cnt41 .bor_bg").width( subCnt - 70 )
			$(".cnt42 .menu_tit, .cnt42 .scroll_box, .cnt42 .loc_area").width(subCnt - 220 - 67);
			$(".cnt42 .loc_area").width(subCnt - 220 - 67 - 4);
			$(".cnt43 .truck_txt div").width( subCnt-198-60-120 )
			$(".cnt51 .menu_info").width( subCnt-316-64 )

			$(".graph").width ( subCnt-15 )
			$(".graph_area").width ( subCnt-50 )
			$(".graph_tit").width ( subCnt-30 )

				if ( w >= 1290 ) { 
					
					$(".type_area .grid_area").width(typeArea) // 여닫기 없는 콘텐츠 영역에서의 그리드 영역
					$(".cnt81 .menu_info").width( w-302-64 )
					$(".cnt82 .menu_info, .cnt82 .menu_info .grid_area, .cnt82 .menu_info .grid_area .ui-jqgrid, .cnt82 .menu_info .grid_area .ui-jqgrid-bdiv, .cnt82 .menu_info .grid_area.ui-corner-bottom, .cnt82 .menu_info .grid_area .ui-jqgrid-htable, .cnt82 .menu_info .grid_area .ui-jqgrid-labels, .cnt82 .menu_info .grid_area .ui-jqgrid-hbox, .cnt82 .menu_info .grid_area .ui-jqgrid-view, .cnt82 .menu_info .grid_area .ui-jqgrid-hdiv, .cnt82 .menu_info .grid_area .ui-jqgrid-htable thead, .cnt82 .menu_info #ajaxProwed1").width( w-280-74 );
	

				} else {
					$(".type_area .grid_area").width(932) // 여닫기 없는 콘텐츠 영역에서의 그리드 영역
					$(".cnt81 .menu_info").width( 915 )
					$(".cnt82 .menu_info, .cnt82 .menu_info .grid_area, .cnt82 .menu_info .grid_area .ui-jqgrid, .cnt82 .menu_info .grid_area .ui-jqgrid-bdiv, .cnt82 .menu_info .grid_area.ui-corner-bottom, .cnt82 .menu_info .grid_area .ui-jqgrid-htable, .cnt82 .menu_info .grid_area .ui-jqgrid-labels, .cnt82 .menu_info .grid_area .ui-jqgrid-hbox, .cnt82 .menu_info .grid_area .ui-jqgrid-view, .cnt82 .menu_info .grid_area .ui-jqgrid-hdiv, .cnt82 .menu_info .grid_area .ui-jqgrid-htable thead, .cnt82 .menu_info #ajaxProwed1").width( 925 );
				}

					// height 지정
					
					var graphArea = $(".graph").outerHeight();
					var gridArea2 = $(".cnt35 .list2 .grid_area");
					var headerHei = $("#header").height();
					var graphHei = $(".graph").height();
					var footerHei = $("#footer").height();
							
					//$(".frame04").height(bodyHeight+27);
					
					//var banner21 = $(".banner21").outerHeight();
					//$(".banner21 .bdrs").height(bodyHeight-graphHei-20)
					console.log(h);
					$(".cnt21, .cnt22, .cnt31, .cnt33, .cnt34, .cnt35, .cnt43, .cnt44, .cnt51, .cnt52, .cnt56").height(h-169)
					$(".frame1_cnt").height(h-190) // 190 ( header height + footer height + sub_cnt padding-top + sub_cnt padding_bottom + title height )
					//$(".cnt21").height(bodyHeight - 91)
					//$(".cnt61").height(bodyHeight - 135)
					//$("iframe").height(bodyHeight+54)

					// top 지정
					//var banner = $(".banner").outerHeight();
					//$(".graph").css({top:banner-18})
	});
	$(window).trigger('resize');		

});

