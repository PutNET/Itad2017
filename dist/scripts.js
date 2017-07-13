
  


//     $('.firm').slideUp();
//     $(document).ready(function () {
//         $('#fullpage').fullpage({
//             sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
//         });

//         $('#photo').click(function () {
//             $('.right-column').empty();
//             $('.hidden-div').css('display', 'block');

//         });

//         $("#example14").zAccordion({
//             tabWidth: "15%",
//             width: "100%",
//             height: "500px"
//         });
//         $(window).resize(function () {
//             $("#example14").height($(window).height());
//             $("#example14 li").height($(window).height());
//             $("#example14 img").height($(window).height());
//         });

//         $('.image').hover(function () {
//             $('.firm', this).slideDown(500);
//             $('.image').stop().animate(
//                 {
//                     width: "5%",
//                 },
//                 500,
//                 'linear',
//             );
//             $(this).stop().animate(
//                 {
//                     width: "15%",
//                 },
//                 500,
//                 'linear',
//             );
//         },
//             function () {
//                 $('p', this).slideUp(500);
//                 $('.image').stop().animate(
//                     {
//                         width: "10%",
//                     },
//                     500,
//                     'linear',
//                 );
//                 $(this).stop().animate(
//                     {
//                         width: "10%",
//                     },
//                     500,
//                     'linear',
//                     function () {
//                     });
//             });
//     });
// });

//$('.firm').fadeOut();
$(document).ready(function () {



$(".arrow, .leftarrow").click(function(){
    $(".white-stripe, .hidden-div").toggle();
});

$(".arrow").hover(function(){
	$(this).css("cursor", "pointer");
});

    
    	for(var i = 1; i<22; i++){
		document.getElementById('slide-wrap-add').innerHTML += '<div class="slide-container group"><img src="./ITAD16/zd ('+i+').jpg"  alt="" /></div>'
			
	}
      var squareBeginning = "<div class='square logo-item itad-",
        squareEnd = "'></div>"
    times = 0;

    $("#logo-square-content").find(".row").each(function (index) {
        times = 6;

        for (var i = 0; i < index; i++) {
            $(this).append(squareBeginning + 0 + squareEnd);
        }
        for (var i = 0; i < times; i++) {
            var colorNumber = Math.floor(Math.random() * 14) + 1;
            $(this).append(squareBeginning + colorNumber + squareEnd);
        }
    });

function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}
 
 
function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },700);
}
 
function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);
 
    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';
 
    //animations
    var spans = clock.getElementsByTagName("span");
    animateClock(spans[3]);
    if(timer.seconds == 59) animateClock(spans[2]);
    if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);
 
    //check for end of timer
    if(timer.total < 1){
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }
  }, 1000);
}
 
 
window.onload = function(){
  var deadline = new Date("April 25, 2018 17:15:00");
  startTimer("clock", deadline);
};

    $('#photo').click(function () {
        $('.right-column').empty();
        $('.hidden-div').css('display', 'block');

    });
$('.slide-wrap')
				.after('<div class="menu">') //tworzymy nawigacje
				.cycle({
					fx: 'scrollHorz', //rodzaj animacji
					speed: 'fast', //szybkość przejścia
					timeout:3000, //czas między slajdami
					next: '.slide-wrap',//określamy element, który przenosi nas do następnego slidu
					pager: '.menu' //określamy nawigację
			});
    $("#example14").zAccordion({
        tabWidth: "15%",
        width: "100%",
        height: "500px"
				});
				$(window).resize(function () {
        $("#example14").height($(window).height());
        $("#example14 li").height($(window).height());
        $("#example14 img").height($(window).height());
				});

    $('.image').hover(function () {
        $('.firm', this).css('visibility', 'visible');
        $('.firm', this).stop().slideDown(500);
        $('.image').stop().animate(
            {
                width: "5%",
            },
            500,
            'linear',
        );
        $(this).stop().animate(
            {
                width: "15%",
            },
            500,
            'linear',
        );
    },
        function () {
            $('.firm', this).stop().slideUp(500);
            $('.image').stop().animate(
                {
                    width: "10%",
                },
                500,
                'linear',
            );
            $(this).stop().animate(
                {
                    width: "10%",
                },
                500,
                'linear',
                function () {
                });

        });

        	$("#example15").zAccordion({
					tabWidth: "10%",
					width: "100%",
					height: "25%"
				});
				$("#prelegent1").click(function(){
					//document.getElementById('logo_prelegent').src = "./img/carousel-item-3.jpg.jpg";
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://previews.123rf.com/images/kurhan/kurhan1510/kurhan151001591/46965145-Beautiful-mature-business-woman-isolated-over-white-background--Stock-Photo.jpg" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et lorem sed arcu faucibus lobortis. Nam tellus eros, laoreet ut ultricies fringilla, faucibus sed risus. Morbi euismod vestibulum massa cursus fringilla. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("To już było ! ");
                    $("#Opis").empty();
                    $("#Opis").append("ITAD 2016");
                    
				});
				$("#prelegent2").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://st.depositphotos.com/1371851/1256/i/450/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Quisque gravida auctor dapibus. Pellentesque porttitor purus convallis neque posuere dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempus eu nibh id pellentesque.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Marek Piekarczyk \"Microsoft\"");
                    $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				$("#prelegent3").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://ak8.picdn.net/shutterstock/videos/1583458/thumb/3.jpg?i10c=img.resize(height:160)" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Duis tincidunt eget dolor vel molestie. Praesent ac congue nunc, quis euismod dolor. Vivamus sed blandit nunc. Vivamus et risus eget ante lobortis ullamcorper.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Marek Łowca \"google\"");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				}); 
				$("#prelegent4").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://previews.123rf.com/images/vgstudio/vgstudio1006/vgstudio100600027/7268969-Portrait-of-happy-smiling-man-isolated-on-white-Stock-Photo-face.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Morbi ut scelerisque arcu. Nulla fringilla faucibus efficitur. Mauris a accumsan diam. Sed in velit interdum, vulputate sapien ut, volutpat felis. Pellentesque molestie blandit tortor, nec tristique ligula aliquam sed.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Zbyszek Bogdaniec \"Webdeveloper\"");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				$("#prelegent5").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Nam vitae sollicitudin felis, vehicula tincidunt turpis. Proin feugiat placerat tempor. Nullam a cursus metus. Ut nec sagittis diam, in suscipit ante. Ut rhoncus pretium ante, auctor viverra lorem congue ac.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Jola Jolanta");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				$("#prelegent6").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://www.colourbox.com/preview/2807248-smiling-businesswoman-at-work-on-computer-or-at-home-on-computer.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Cras at elit vel ipsum sagittis placerat. Morbi eget velit ac est ultricies sollicitudin in eu tellus. Donec et nibh eget ante tincidunt ultricies. Ut at sodales sem. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("Eliza Baraniak");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				$("#prelegent7").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://stockfresh.com/files/d/dash/m/83/229003_stock-photo-portrait-of-beautiful-young-woman.jpg" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Nulla fringilla faucibus efficitur. Mauris a accumsan diam. Sed in velit interdum, vulputate sapien ut, volutpat felis. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("Morela Jakoda");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				$("#prelegent8").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="http://thumb9.shutterstock.com/display_pic_with_logo/1387081/379867366/stock-photo-happy-young-man-close-up-portrait-or-head-shot-of-handsome-young-man-in-casual-blue-shirt-and-379867366.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Mauris commodo lorem eros, sit amet vehicula augue lacinia a. Donec nec felis eget augue interdum vehicula. Duis tincidunt eget dolor vel molestie.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Kasper Sraster");
                     $("#Opis").empty();
                    $("#Opis").append("PRELEGENT");
				});
				//koniec prelegentow
                //agenda
                
});