$(document).ready(function (){
	// 기본 탭
	var $tab = $(".tab .tab_btn");
	$tab.on("click",function  () {
		$(this).closest(".tab").find("> aside").removeClass("on").find("> ul").hide();
		$(this).closest(".tab").find("> aside").removeClass("on").find("> div").hide();	// 4_1
		$(this).siblings().show().parent().addClass("on");
		return false;
	});

	// 레이어 팝업창
	function setLayerPopup ( openBtn, layerId, closeBtn ) {
		$(openBtn).on("click",function  () {

			centerPosition();
			function centerPosition () {
				var bodyHeight=$(window).height()-$("#header").outerHeight()-$("#footer").outerHeight()
		
				var topPos=( $(".sub_cnt").outerHeight()-$(layerId).outerHeight() )/ 2 ;
				var leftPos=( $(".sub_cnt").outerWidth()-$(layerId).outerWidth() )/ 2 ;
				console.log( $(".sub_cnt").outerHeight() );
				console.log( $(".sub_cnt").outerWidth() );
				console.log( $(layerId).outerHeight() );
				console.log( $(layerId).outerWidth() );
				console.log(topPos, leftPos);
				$(layerId).css({ top:topPos , left:leftPos });
			}

			$("#popupMask, "+layerId).fadeIn("fast").attr("tabIndex",0);

			$(window).on("resize",centerPosition);

			$(closeBtn).on("click",function  () {
				$("#popupMask, "+layerId).fadeOut("fast",function  () {
					$(this).removeAttr("tabIndex");
				})

				$(openBtn).focus();

				return false;
			});

			 /*
			$("#popupMask").on("click",function  () {
				$(closeBtn).click();
			});				
			 */


			return false;
		});
	}

	//setLayerPopup("모달열어줄버튼","열려질모달","닫아줄버튼")
	setLayerPopup("#openBtn1","#popupLayer1","#popupLayer1 .close_btn"); // 8_2
	setLayerPopup("#openBtn2","#popupLayer2","#popupLayer2 .close_btn");	// 2_1
	setLayerPopup("#openBtn3","#popupLayer3","#popupLayer3 .close_btn");
	setLayerPopup("#openBtn4","#popupLayer4","#popupLayer4 .close_btn");
	setLayerPopup("#openBtn5","#popupLayer5","#popupLayer5 .close_btn");
	setLayerPopup("#openBtn6","#popupLayer6","#popupLayer6 .close_btn");
	setLayerPopup("#openBtn7","#popupLayer7","#popupLayer7 .close_btn");
	setLayerPopup("#openBtn8","#popupLayer8","#popupLayer8 .close_btn");
	setLayerPopup("#openBtn9","#popupLayer9","#popupLayer9 .close_btn");
	setLayerPopup("#openBtn10","#popupLayer10","#popupLayer10 .close_btn");
	setLayerPopup("#openBtn100","#popupLayer100","#popupLayer100 .close_btn");



 	function closeLayer( obj ) { $(obj).parent().parent().hide();}

	$(function(e){
			/* 클릭 클릭시 클릭을 클릭한 위치 근처에 레이어가 나타난다. */
		$('.imgSelect').click(function(e) {
			var imgSelect = $(".imgSelect");

			var sWidth = window.innerWidth;
			var sHeight = window.innerHeight;

			var oWidth = $('.popupLayer').outerWidth();
			var oHeight = $('.popupLayer').outerHeight();
			//console.log(oWidth, oHeight);

			// 레이어가 나타날 위치를 셋팅한다.
			var divLeft = parseInt( $(this).css('left') ) + 40
			var divTop = parseInt( $(this).css('top') )
			//console.log(divLeft, divTop);

			var scrollT = $('#subCnt').scrollTop();
			var scrollL = $('#subCnt').scrollLeft();
			//console.log(scrollT,scrollL);


			// 레이어가 화면 크기를 벗어나면 위치를 바꾸어 배치한다.
			if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
			if( divTop + oHeight > sHeight ) divTop -= oHeight;

			// 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
			if( divLeft < 0 ) divLeft = 0;
			if( divTop < 0 ) divTop = 0;

			$('.popupLayer').css({
				"top": divTop,
				"left": divLeft,
				"position": "absolute"
			}).show();

			$(".close_btn").on("click",function  () {
				$(this).closest(".popupLayer").hide();
				return false;
			});

			//포커스온일때 레이어 쇼
			$(".imgSelect").focusin(function () {
				$('.popupLayer').show();
			});
			//포커스 빠질때 레이어 아웃
			$(".imgSelect").focusout(function () {
				$('.popupLayer').hide();
				return false;
			});

		});
	});   

	// 페이지 1depth에 on 들어오기
	var gnb = $("#gnb > ul > li")
	
	gnb.find("> ul > li").on("click",function  () {
		$(this).parent().parent().addClass("on").siblings().removeClass("on")
	});

	// 배경색 변경
	/*
	var $active = $(".treeview li a");
	$active.on("click", function  () {
		$(this).addClass("active").siblings().removeClass("active");
		return false;
	});			
	*/
		

/*

	


1 둘 다 css
$(".sub_cnt").css({left:0, width:w-54});
$(".sub_cnt").css({left:bannerWid,width:w-bannerWid-54})

2 둘 다 animate
$(".sub_cnt").animate({left:0}).animate({width:w-54});
$(".sub_cnt").animate({left:bannerWid}).animate({width:w-bannerWid-54});

2 left만 css
$(".sub_cnt").css({left:0}).animate({width:w-54});
$(".sub_cnt").css({left:bannerWid}).animate({width:w-bannerWid-54});

3 width만 css
$(".sub_cnt").animate({left:0}).css({width:w-54});
$(".sub_cnt").animate({left:bannerWid}).css({width:w-bannerWid-54});
*/	
});
