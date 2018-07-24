$(document).ready(function (){
	
	$(window).on('resize',function  () {
		
			var w = $(window).width();
			var h = $(window).height();
			var subCnt = $(".sub_cnt").outerWidth();
			var subCntH = $(".sub_cnt").outerHeight();

			var headerHei = $("#header").outerHeight();
			var footerHei = $("#footer").outerHeight();
			var titHei = $(".title").outerHeight();
			var graphHei = $(".graph").outerHeight();

			$("#content").height( h - headerHei - footerHei );
			$(".sub_cnt, .ban_r").height( h - headerHei - footerHei - titHei );
			$(".frame4_cnt").children().first().height ( 409 );

			/*==========----- frame2 -----==========*/
			$("#banArea").height( h - 55 );

			$(".cnt41 .list1").width( subCnt - 60 );
			$(".cnt41 .grid_area").width( subCnt-359 );

			$(".cnt43 .truck_txt div").width( subCnt-403 );
			$(".cnt51 .enroll_area").width( subCnt-352 );

			/*==========----- frame4 -----==========*/
			$(".frame4_cnt .cnt_area").height( subCntH - 384 );

			$(".cnt22 .map_area").width ( subCnt-340 );
			$(".cnt35 .map_area").width( subCnt-644 );

			$(".graph").width ( subCnt-15 );

			/*==========----- 전체 화면 -----==========*/
			$(".full_shot .scroll_box").height ( h - 26 )
	});
	$(window).trigger('resize');		

});

