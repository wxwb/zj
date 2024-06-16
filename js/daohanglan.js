// 利用事件委托简化：点击不同li切换不同的div(图层)
// 优点：减少了大量的事件创建与重复代码
// 缺点：多了800毫秒的空白
$(".daohanglan-neiron-ul").on("click","li",function(){
    //点击li后，先设全部，后单个添加
    $(".daohanglan-neiron-ul li").css({"background-color":"#fff"});
    $(this).css({"background-color":"#ececec"});

    $("#lioulan>div").animate({"left":"-100%"},800);
    $(`#lioulan-${this.id.slice(this.id.length-2,this.id.length)}`).animate({"left":"0%"},800)
});


//下面的代码的作用为：点击不同li切换不同的div(图层)
//废弃原因：代码臃肿、重复性高、且无复用性
// $("#daohanglan-neiron-li01").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#fff"});
//     $("#daohanglan-neiron-li01").css({"background-color":"#ececec"});

//     $("#lioulan div").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li02").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li02").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"0%"},800);
//     $("#lioulan-03").animate({"left":"0%"},800);
//     $("#lioulan-04").animate({"left":"0%"},800);
//     $("#lioulan-05").animate({"left":"0%"},800);
//     $("#lioulan-06").animate({"left":"0%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li03").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li03").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"0%"},800);
//     $("#lioulan-04").animate({"left":"0%"},800);
//     $("#lioulan-05").animate({"left":"0%"},800);
//     $("#lioulan-06").animate({"left":"0%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li04").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li04").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"-100%"},800);
//     $("#lioulan-04").animate({"left":"0%"},800);
//     $("#lioulan-05").animate({"left":"0%"},800);
//     $("#lioulan-06").animate({"left":"0%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li05").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li05").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"-100%"},800);
//     $("#lioulan-04").animate({"left":"-100%"},800);
//     $("#lioulan-05").animate({"left":"0%"},800);
//     $("#lioulan-06").animate({"left":"0%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li06").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li06").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"-100%"},800);
//     $("#lioulan-04").animate({"left":"-100%"},800);
//     $("#lioulan-05").animate({"left":"-100%"},800);
//     $("#lioulan-06").animate({"left":"0%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li07").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li07").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"-100%"},800);
//     $("#lioulan-04").animate({"left":"-100%"},800);
//     $("#lioulan-05").animate({"left":"-100%"},800);
//     $("#lioulan-06").animate({"left":"-100%"},800);
//     $("#lioulan-07").animate({"left":"0%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })
// $("#daohanglan-neiron-li08").click(function(){
//     $(".daohanglan-neiron-ul li").css({"background-color":"#f9f9f9"});
//     $("#daohanglan-neiron-li08").css({"background-color":"#ececec"});

//     $("#lioulan-01").animate({"left":"-100%"},800);
//     $("#lioulan-02").animate({"left":"-100%"},800);
//     $("#lioulan-03").animate({"left":"-100%"},800);
//     $("#lioulan-04").animate({"left":"-100%"},800);
//     $("#lioulan-05").animate({"left":"-100%"},800);
//     $("#lioulan-06").animate({"left":"-100%"},800);
//     $("#lioulan-07").animate({"left":"-100%"},800);
//     $("#lioulan-08").animate({"left":"0%"},800);
// })