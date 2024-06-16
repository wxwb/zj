//背景中的打字特效
window.onload = function (){
    let p = document.getElementById("body-beijintu-p")
    let i = 0,
        timer= 0,
        str = '千里之行，始于足下'
    
    function typing(){
        if(i <= str.length){
            p.innerHTML = str.slice(0,i++) + '_'
            timer = setTimeout(typing,120)
        }else{
            p.innerHTML = str
            clearTimeout(timer)
            //打字结束后开始加载主体区域
            //自定义动画 .animate(更改的样式属性,更改所用的时间)
            setTimeout(
                function(){ $("#content").animate({height:'80%'},1000) }
            ,1000);
        }
    }
    typing();
}
