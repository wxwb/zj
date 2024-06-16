//--------------------------------------- 模块01 网站首页 -------------------------------------
//时钟变化
let shizhong = document.querySelector('.lioulan-01-shizhong')
let addZero = (num) => {
    if(num >= 10) {
        return num
    }else{
        return `0${num}`
    }
}
let updateTime = () => {
    let now = new Date();
    let time = addZero(now.getHours())+":"+
                addZero(now.getMinutes())+":"+
                addZero(now.getSeconds());
    shizhong.innerHTML = time;
} 
updateTime()
setInterval(updateTime,1000)
//催你打代码


//---------------------------------------- 模块03 关于本站 -----------------------------

//知识掌握
// 掌握的技能----------------------------------------------------
let lioulan_02_url01 = [
    {name: 'HTML5', img:'resources/image/lioulan/HTML5.png'},
    {name: 'CSS3', img: 'resources/image/lioulan/CSS3.png'},
    {name: 'JavaScript', img: 'resources/image/lioulan/JavaScript.png'},
    {name: 'jQuery', img: 'resources/image/lioulan/jQuery.png'},
    {name: 'Ajax', img: 'resources/image/lioulan/Ajax.png'},
    {name: 'Vue2', img: 'resources/image/lioulan/Vue.png'},
]
// 入门的技能
let lioulan_02_url02 = [
    {name: 'NodeJS', img: 'resources/image/lioulan/NodeJs.png'},
    {name: 'WebPack', img: 'resources/image/lioulan/WebPack.png'},
]
const middle03 = document.querySelector('.lioulan-02-xinxi-middle03')
//遍历数据
for(let i=0;i<lioulan_02_url01.length;i++){
    let div = document.createElement('div')
    div.innerHTML=`<img src="${lioulan_02_url01[i].img}">
    <span>&nbsp;${lioulan_02_url01[i].name}&nbsp;</span>`
    middle03.insertBefore(div,middle03.children[1])
}
for(let i=0;i<lioulan_02_url02.length;i++){
    let div = document.createElement('div')
    div.innerHTML=`<img src="${lioulan_02_url02[i].img}">
    <span>&nbsp;${lioulan_02_url02[i].name}&nbsp;</span>`
    middle03.appendChild(div)
}

//---------------------------------------- 模块05 站点展示 -----------------------------
// 壁纸展示
let lioulan_05_url01 = [
    {name: 'MC21', img: 'resources/image/mc/7.jpg'},
    {name: 'MC22', img: 'resources/image/mc/8.jpg'},
    {name: 'MC23', img: 'resources/image/mc/9.jpg'},
    {name: 'MC24', img: 'resources/image/mc/10.jpg'},
]
const lioulan_05_top_img= document.querySelector('.lioulan-05-top-img')
for(let i=0;i<lioulan_05_url01.length;i++){
    let img = document.createElement('img')
    img.src=`${lioulan_05_url01[i].img}`
    lioulan_05_top_img.appendChild(img)
}
let index = 0;
let fade = function(){
    $('.lioulan-05-top-img').children('img').eq(index).fadeTo(2000,0)
    if(index<lioulan_05_url01.length){
        index++
    }else{
        index = 0
    }
    $('.lioulan-05-top-img').children('img').eq(index).fadeTo(2000,1)
}
setInterval(fade,3000)


// MC 站点遍历
let lioulan_05_url02 = [
    {url: '', img: 'resources/image/MC.png', h3: '流浪者', p: '爱生活，爱分享'},
    {url: '', img: 'resources/image/MC.png', h3: '流浪者', p: '爱生活，爱分享'},
    {url: '', img: 'resources/image/MC.png', h3: '流浪者', p: '爱生活，爱分享'},
]
const zhandianul01 = document.querySelector('.lioulan-05-zhandianul01')
for(let i=0;i<lioulan_05_url02.length;i++){
    let li = document.createElement('li')
    li.innerHTML=`
    <div class="lioulan-05-zhandian02">
        <a href="${lioulan_05_url02[i].url}" target="_blank" rel="noopener noreferrer">
            <div><img src="${lioulan_05_url02[i].img}" alt="图片描述"></div>
            <h3>${lioulan_05_url02[i].h3}</h3>
            <p>${lioulan_05_url02[i].p}</p>
        </a>
        <div>立即前往</div>
    </div>`
    zhandianul01.appendChild(li)
}