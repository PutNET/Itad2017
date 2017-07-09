
  


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
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et lorem sed arcu faucibus lobortis. Nam tellus eros, laoreet ut ultricies fringilla, faucibus sed risus. Morbi euismod vestibulum massa cursus fringilla. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("Jestem Radko");
				});
				$("#prelegent2").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="http://warszawawpigulce.pl/wp-content/uploads/2015/03/dog-425067_12801.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Quisque gravida auctor dapibus. Pellentesque porttitor purus convallis neque posuere dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempus eu nibh id pellentesque.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Jestem Rychu");
				});
				$("#prelegent3").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Duis tincidunt eget dolor vel molestie. Praesent ac congue nunc, quis euismod dolor. Vivamus sed blandit nunc. Vivamus et risus eget ante lobortis ullamcorper.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Marek Łowca");
				}); 
				$("#prelegent4").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="http://warszawawpigulce.pl/wp-content/uploads/2015/03/dog-425067_12801.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Morbi ut scelerisque arcu. Nulla fringilla faucibus efficitur. Mauris a accumsan diam. Sed in velit interdum, vulputate sapien ut, volutpat felis. Pellentesque molestie blandit tortor, nec tristique ligula aliquam sed.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Zbyszek Bogdaniec");
				});
				$("#prelegent5").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Nam vitae sollicitudin felis, vehicula tincidunt turpis. Proin feugiat placerat tempor. Nullam a cursus metus. Ut nec sagittis diam, in suscipit ante. Ut rhoncus pretium ante, auctor viverra lorem congue ac.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Jola Jolanta");
				});
				$("#prelegent6").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="http://warszawawpigulce.pl/wp-content/uploads/2015/03/dog-425067_12801.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Cras at elit vel ipsum sagittis placerat. Morbi eget velit ac est ultricies sollicitudin in eu tellus. Donec et nibh eget ante tincidunt ultricies. Ut at sodales sem. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("Eliza Baraniak");
				});
				$("#prelegent7").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0" alt="" width="100%" height="100%" />';
					$(".change_text").empty();
					$(".change_text").append("Nulla fringilla faucibus efficitur. Mauris a accumsan diam. Sed in velit interdum, vulputate sapien ut, volutpat felis. ")
					$("#change_descibe").empty();
					$("#change_descibe").append("Morela Jakoda");
				});
				$("#prelegent8").click(function(){
					document.getElementById('logo_prelegent').innerHTML = '<img src="http://warszawawpigulce.pl/wp-content/uploads/2015/03/dog-425067_12801.jpg" width="100%" height="100%" alt="" />';
					$(".change_text").empty();
					$(".change_text").append("Mauris commodo lorem eros, sit amet vehicula augue lacinia a. Donec nec felis eget augue interdum vehicula. Duis tincidunt eget dolor vel molestie.")
					$("#change_descibe").empty();
					$("#change_descibe").append("Kasper Sraster");
				});
				//koniec prelegentow
                //agenda
                
});