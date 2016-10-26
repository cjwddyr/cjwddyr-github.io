var txt = document.getElementById('txt');
var section = document.querySelector('#zouni');
// var div = document.querySelector('.big');
// var zou = document.getElementsByClassName('zou');


var data = [
    {
        name: "红米Note 4",
        neirong: "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
        price: "899元 起",
        ul: "http://i8.mifile.cn/v1/a1/dc39e456-a433-4b59-c329-36f3ce00c1f1.jpg",
        pinyin : "hongmi4"
    },
    {
        name: "红米Pro",
        neirong : "Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
        price :"1499元 起",
        ul :  "http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg",
        pinyin : "hongmipro"
    }, 
    {
        name: "红米手机3S" ,
        neirong : "指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
        price :"699元 起",
        ul : "http://i8.mifile.cn/v1/a1/517db742-917d-d2ef-5953-066c2c2f6625.jpg",
        pinyin: "hongmishouji3s"
    }, 
    {
        name: "红米Note 3",
        neirong : "【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
        price : "799元 起",
        ul : "http://i1.mifile.cn/v1/a1/T1VNJjBsdT1RXrhCrK.jpg",
        pinyin : "hongminote3"
     },
      { 
        name: "小米Max全网通",
        neirong : "6.44大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",
        price : "1299元 起",
        ul : "http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg",
        pinyin : "xiaomimaxquanwangtong"
     },{ 
        name: "小米5 尊享版",
        neirong : "骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身",
        price : "2499元",
        ul : "http://i8.mifile.cn/v1/a1/dc39e456-a433-4b59-c329-36f3ce00c1f1.jpg",
        pinyin : "xiaomiszuixiangban"
     },{ 
        name: "红米手机3X",
        neirong : "高通骁龙430 八核处理器 / 2GB内存 + 32GB存储 / 标配指纹识别 / 全网通 4G双卡双待 / 高光亮边金属机身",
        price : "799元",
        ul : "http://i8.mifile.cn/v1/a1/72ca0490-3a57-0f78-c5fe-624cf8cb6bb4.jpg",
        pinyin : "hongmishouji3x"
     },{ 
        name: "小米笔记本Air",
        neirong : "轻薄全金属机身 / 11.5 小时超长续航，支持1C快充 / FHD 全贴合屏幕",
        price : "3499元",
        ul : "http://i8.mifile.cn/v1/a1/ef4b3763-3460-bcf3-9643-eb892bbadfb8.jpg",
        pinyin : "xiaomibijibenair"
     },{ 
        name: "小米平板2",
        neirong : "全金属机身 / 7.9英寸视网膜屏幕 / 800万像素相机 / 6190mAh大电池 / 支持5V/2A快充",
        price : "999元",
        ul : "http://i1.mifile.cn/v1/a1/T1RXWgBsCT1RXrhCrK.jpg",
        pinyin : "xiaomipingban2"
     },{ 
        name: "小米电视3S 43英寸",
        neirong : "LG、友达 全高清液晶屏 / 金属机身薄至10.9mm / 内容丰富 / 支持壁挂",
        price : "1799元",
        ul : "http://i8.mifile.cn/v1/a1/T1YXYgBvDv1RXrhCrK.jpg",
        pinyin : "xiaomidianshi3s43yingc"
     },{ 
        name: "小米电视3S 48英寸",
        neirong : "金属机身薄至9.9mm / 原装三星液晶屏 / 四核1.45GHz CPU / 杜比和dts音频双解码 / 支持壁挂",
        price : "1999元",
        ul : "http://i8.mifile.cn/v1/a1/T1ZCYgB_Ev1RXrhCrK.jpg",
        pinyin : "xiaomidianshi3s48yingcun"
     },{ 
        name: "小米电视3S 65英寸 曲面",
        neirong : "原装进口三星超薄真4K曲面屏 / 金属机身薄至5.9mm / 最美的小米电视",
        price : "8999元",
        ul : "http://i8.mifile.cn/v1/a1/T18cEjBsVT1RXrhCrK.jpg",
        pinyin : "xiaomidianshi3s65yingcunqumian"
     },{ 
        name: "小米盒子3",
        neirong : "全新升级64位 4K网络机顶盒 / 标配小米蓝牙语音体感遥控器",
        price : "8999元",
        ul : "http://i1.mifile.cn/v1/a1/T1YKC_BC_v1RXrhCrK.jpg",
        pinyin : "xiaomihezi3"
}
];

function initCtrl(data) {
    var strHtml = "";
    console.log(txt);
    data.forEach(function (item) {
        strHtml += '<div class="big">' + '<div class="left">' + '<img src="' + item.ul + '" alt="1" style=" transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1,1);">' + '</div>' + '<div class="right">' + '<div class="title">' + '<p id="zou">' + item.name + '</p>' + '</div>' + '<div class="neirong">' + '<p>' + item.neirong + '</p>' + '</div>' + '<div class="price">' + '<p>' + item.price + '</p>' + '</div>' + '</div>' + '</div>';
    })
    section.innerHTML = strHtml;
}
initCtrl(data);

txt.onkeyup = function (e) {
    var str = txt.value;
    var result = data.filter(function (item) {
        if (item.name.toLowerCase().indexOf(str.toLowerCase()) > -1 || item.pinyin.toLowerCase().indexOf(str.toLowerCase()) > -1) {
            return item;
        }
    });
    initCtrl(result);
}