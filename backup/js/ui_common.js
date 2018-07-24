
/*
$(window).scroll(function(){
    var $this = $(this);
    $('#banArea,#header').css('left', 0 - $this.scrollLeft());
});
*/

var cntSize = function() {
	if (($(window).width()-220) > 990) {
		$('.frame2_cnt, .frame4_cnt').width($(window).width()-222);
		$('.frame3_cnt').width($(window).width()-444);
	} else {
		$('.frame2_cnt, .frame4_cnt').width(1058);
		$('.frame3_cnt').width(836);
	}	
}
$(document).ready(cntSize)
$(window).resize(cntSize)

// 왼쪽 배너 여닫기
function fordingLeft() {
	$('#wrap').toggleClass('folded');
	var btnFold = $("#wrap").hasClass("folded");
	var borBg = $(".bor_bg").outerWidth();
	var subCnt = $("#subCnt").outerWidth();
	console.log(subCnt);
	var timberPlot = "";
			
	if ( btnFold ) {
	    $("#banCnt").hide();

		$(".cnt41 .list1").width( subCnt-70 );
		$(".cnt51 .enroll_area").width( subCnt-352 );

		$(".cnt21 .cnt_area").width( subCnt-64 )
		$(".cnt22 .map_area").width ( subCnt-340 );
		$(".cnt35 .map_area").width( subCnt-724 )
		$(".cnt43 .truck_txt div").width( subCnt-403 );

		$(".graph").width ( subCnt-15 )
		$(".graph_area").width ( subCnt-50 )
		$(".graph_tit").width ( subCnt-30 )

		if ($(".grid_area").length != 0) {
			reSizefn();
		}
		
	} else {
		$("#banCnt").show();

		$(".cnt41 .list1").width( subCnt-70 );
		$(".cnt51 .enroll_area").width( subCnt-352 );

		$(".cnt21 .cnt_area").width( subCnt-64 )
		$(".cnt22 .map_area").width ( subCnt-340 );
		$(".cnt35 .map_area").width( subCnt-724 )
		$(".cnt43 .truck_txt div").width( subCnt-403 );

		$(".graph").width ( subCnt-15 )
		$(".graph_area").width ( subCnt-50 )
		$(".graph_tit").width ( subCnt-30 )

		if ($(".grid_area").length != 0) {
			reSizefn();
		}
	}
}
