$(document).ready(function(){

	$('.carousel').carousel({
		interval:2000
	});
     $('.nav li').click(function(e) {
        $('.nav li').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });





	$('body').scrollspy({ target: '.nav navbar-nav'});
	$('.infoSecundario').hide();
	$('.infoTerciario').hide();
	$('#primaria').on('click',mostrarPrimario);
	$('#secundario').on('click',mostrarSecundario);
	$('#terciario').on('click',mostrarTerciario);
	function mostrarPrimario(){
		$('.infoSecundario').hide();
		$('.infoTerciario').hide();
		$('.infoPrimario').slideDown(1000);
	}

	function mostrarSecundario(){
		$('.infoPrimario').hide();
		$('.infoTerciario').hide();
		$('.infoSecundario').slideDown(1000);
	}

	function mostrarTerciario(){
		$('.infoPrimario').hide();
		$('.infoSecundario').hide();
		$('.infoTerciario').slideDown(1000);
	}
});



