
$(function(){
    $('#fullpage').fullpage({
        fingersonly: true,
        anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
        menu:'.rightNav',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.count').counterUp({delay: 10,time: 550});
                }
            // if(index == 3){
            //     $('.count').counterUp({delay: 10,time: 550});
            // }
        }
    });
});











 