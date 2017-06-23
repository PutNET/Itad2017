// $(document).ready(function () {
//     var squareBeginning = "<div class='square logo-item itad-",
//         squareEnd = "'></div>"
//     times = 0;

//     $("#logo-square-content").find(".row").each(function (index) {
//         times = 6;

//         for (var i = 0; i < index; i++) {
//             $(this).append(squareBeginning + 0 + squareEnd);
//         }
//         for (var i = 0; i < times; i++) {
//             var colorNumber = Math.floor(Math.random() * 14) + 1;
//             $(this).append(squareBeginning + colorNumber + squareEnd);
//         }
//     });


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

$('.firm').slideUp();
$(document).ready(function () {
    $('#photo').click(function () {
        $('.right-column').empty();
        $('.hidden-div').css('display', 'block');

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
        $('.firm', this).slideDown(500);
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
            $('p', this).slideUp(500);
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
});