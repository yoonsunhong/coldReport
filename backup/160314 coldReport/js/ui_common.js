


$(window).scroll(function(){
    var $this = $(this);
    $('#snb,#header').css('left', 0 - $this.scrollLeft());
});


var cntSize = function() {

	if (($(window).width()-220) > 990) {
		$('#subCnt').width($(window).width()-220);
		$('#subCnt').height($(window).height()-117-28-24);
		
		//$(".cnt43 .truck_txt div").width($(window).width()-600)
		//$(".cnt21 .cnt_area").width(cntWid-70);
	} else {
		$('#subCnt').width(1070);
		$('#subCnt').height($(window).height()-117-28-24);

		//$(".cnt21 .cnt_area").width(1020)
	}

	// snb menu fold
	//$('.btn_fold').click(function() {
	//	$('#wrap').toggleClass('folded');
//		var btnFold = $("#wrap").hasClass("folded");
	//	if ( btnFold ) {
//			$("#snb").hide();
//		} else {
//			$("#snb").show();
//		}

	//});
	
}

$(document).ready(cntSize)
$(window).resize(cntSize)

//레프트 폴딩 쇼.하이드
function fordingLeft() {
	$('#wrap').toggleClass('folded');
	var btnFold = $("#wrap").hasClass("folded");
	var borBg = $(".bor_bg").outerWidth();
	var subCnt = $("#subCnt").outerWidth();
	var timberPlot = "";
			
	if ( btnFold ) {
	    $("#snb").hide();

	    if ($(".grid_area").length != 0) {
	        reSizefn();
	    }
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

		
	} else {
		$("#snb").show();
		if ($(".grid_area").length != 0) {
		    reSizefn();
		}
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

	}
}
