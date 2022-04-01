//slick 메인 배너
$(function () {
    // $(".banner").slick({
    //     autoplay:true,
    //     infinite: true,
    //     slidesToShow:2,
    //     arrows:true,
    //     dots : true,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 2700,
    //     responsive: [
    //         {
    //             breakpoint:767,
    //             settings:{
    //                 slidesToShow:1
    //             }
    //         }
    //     ]
    // })
//slick site배너
    // $(".sitename").slick({
    //     centerMode:true,
    //     slidesToShow:3,
    //     arrows:true,
    //     responsive: [
    //         {
    //             breakpoint:767,
    //             settings:{
    //                 centerMode:true,
    //                 slidesToShow:2,
    //                 dots:false
    //             }
    //         },
    //         {
    //             breakpoint:360,
    //             settings:{
    //                 centerMode:true,
    //                 slidesToShow:1,
    //                 dots:false
    //             }
    //         }
    //     ]
    // });

// top toggle

    $('#Box').checkToggler({
          labelOn:"　",
          labelOff:""
    });
// icon
        //첫번째 마우스가 오버되면 addClass(bg)
        //마우스가 아웃되면 removerClass(bg)
        $(".iconWrap li").hover(function () {
        let index =$(this).index();
        $(".iconWrap li").eq(index).on("mouseover",function(){
            $(this).addClass("bg");
        })
        $(".iconWrap li").eq(index).on("mouseout",function(){
            $(this).removeClass("bg");
            console.log(index);
        })
        })
});
// ham 메뉴 모바일
$(function(){
    //ham버튼을 클릭하면 .mnav가 나오도록
    //다시 클릭하면 mnav가 들어가도록
    $(".mham").click(function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".mnav").stop().animate({"left":"-100%"},100);
        }
        else{
            $(this).addClass("active");
            $(".mnav").stop().animate({"left":0},300)
            $(".mnav>img").stop().animate({"left":100},300)
        }
    })
    // 내가 active클래스를 가지고 있는지 체크해서 없으면 active클래스를 주고,
    //형제로 있는 li는 active클래스가 제거되도록, 있으면 active 제거하도록

    //.mnav>li를 자식인 sub를 보이고,
    //형제의 자식인 sub는 닫히고  
    $(".mnav>li>a").click(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active").next(".sub").css("display","none")
            }
            else{
                $(".mnav>li>a").removeClass("active").next().css("display","none");
                $(this).addClass("active").next(".sub").css("display","block");
            }
    })
})