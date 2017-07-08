$(document).ready(function(){

	// FADEIN
	$("body").delay(50).animate({ opacity: 1 }, 100);

	// NAV MENU SCROLL
	if( $('#menu').length > 0 )
		$('#menu').onePageNav({currentClass: 'ativo',scrollOffset: 2, filter: ':not(.linkExterno)'});

	$('.scroll').click(function(e){
    	e.preventDefault();
    	var destino = $(this).attr('href');
    	var scrollTo = destino == '#' ? 0 : $(destino).offset().top - 2;
    	$('html, body').animate({scrollTop:scrollTo}, 800);
    });

	// HEADER FIXO
	$(window).scroll(function(){
		if( $(window).scrollTop() > 500 ){
			$('#menu ').addClass('headerFixo');
		} else {
			$('#menu ').removeClass('headerFixo');
			$('#menu nav li a').removeClass('ativo');
		}	
	});

	// BTS SCROLL LINK
	$(".btScroll").on("click", function(){
		$("html, body").animate({scrollTop: 0 }, 800);
	});

	if( $(window).width() <= 530 ){

		// BT MENU
		$("#menu ").on("click",".btMenu", function(){
			$("#menu ul").toggleClass("on");
		});
		$("#menu li").on("click","a", function(){
			$("#menu ul").removeClass("on");
			$(".btMenu span").removeClass("on");
		});
		$("#menu").on("click",".btMenu", function(){
			$(".btMenu span:nth-child(1)").toggleClass("on");
			$(".btMenu span:nth-child(2)").toggleClass("on");
			$(".btMenu span:nth-child(3)").toggleClass("on");
		});

	}

});


if( $(window).width() >= 768 ){

	$(document).ready(function(){
		modal.init();
	});

	// NODAL
	var modal = {

		init: function(){
			$('.abreModal').click(function(e){
				var idModal = $(this).attr('rel');
				modal.open(idModal);
				e.preventDefault();
			});
		},

		open: function(id){
			var marginLeft = -($('#'+id).width() / 2);
			var marginTop = -($('#'+id).height() / 2);
			var obj = $('#'+id);

			obj.css({position:'relative', zIndex: '101', top: '-280px', left: '50%', margin: marginTop+'px 0 0 '+marginLeft+'px'}).addClass('modalAberto');
			
			$('body').append('<div id="bloqueio"></div>');

			$('#bloqueio').fadeIn(300, function(){
				obj.fadeIn(300);
			}).click(function(){
				modal.close();
			});

			$( '.body' ).css( 'overflow','hidden' );

			$('.fechar').click(function(e){ 
				modal.close();  
				e.preventDefault();
			});
			
		},

		close: function(){

			$('.modalAberto').fadeOut(300, function(){
				$(this).removeClass('.modalAberto');
				$('#bloqueio').fadeOut(300, function(){
					$(this).remove();
				});
			});
			$('body').css('overflow','visible');
		}

	}

}

if ( $('.carrossel').width() <= 768 ){

	$(document).ready(function(){

		$('.carrossel').slick({
			slidesToShow: 1,
			dots: true,
			arrows: false,
			autoplay: false,
			autoplaySpeed: 4000,
			pauseOnHover: true
		});

	});

}