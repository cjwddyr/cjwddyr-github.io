
var sex = document.querySelector('#idtext');
var nametext = document.querySelector('#nametext');
var agetext = document.querySelector('#agetext');
var hobbytext = document.querySelector('#hobbytext');
var linestext = document.querySelector('#linestext');
var abiaoqian = document.querySelector('#xinzeng');

var arr = [];

if (localStorage.myData) {
    arr = JSON.parse(localStorage.myData);
}

xinzeng.addEventListener('click', function () {
    if (nametext.value == "" || agetext.value == "" || hobbytext.value == "" || linestext.value == "") {
        alert('请补全未输入的值');
    }
    else {
        var add = {};
        add.sex = sex.value;
        add.name = nametext.value;
        add.age = agetext.value;
        add.hobby = hobbytext.value;
        add.lines = linestext.value;

        arr.push(add);
        localStorage.myData = JSON.stringify(arr);
        location.href = "index.html";
    }
});

var shuxiugai = document.querySelector('#shuxiugai');
var xiugai = document.querySelector('#xiugai');
var queding = document.querySelector('#queding');

var arrZou = JSON.parse(localStorage.myData);
console.log(arrZou);
xiugai.addEventListener('click', function () {
    if (shuxiugai.value) {
        var result = arrZou.filter(function (item) {
            if (item.name == shuxiugai.value) {
                return item;
            }
        });
        // console.log(result);
        var a = indexSan(result[0]);
        var shuzu = result[0];
        if (a > -1) {
            arrZou.splice(a, 1);
            console.log(arrZou);
            localStorage.myData = JSON.stringify(arrZou);
            console.log(a);
            sex.value = shuzu.sex;
            nametext.value = shuzu.name;
            agetext.value = shuzu.age;
            hobbytext.value = shuzu.hobby;
            linestext.value = shuzu.lines;
        }
    }
});

queding.addEventListener('click', function () {
    var add = {};
    add.sex = sex.value;
    add.name = nametext.value;
    add.age = agetext.value;
    add.hobby = hobbytext.value;
    add.lines = linestext.value;

    arrZou.push(add);
    localStorage.myData = JSON.stringify(arrZou);
    location.href = "index.html";
})

function indexSan(result) {
    for (var i = 0; i < arrZou.length; i++) {
        if (arrZou[i] == result) {
            return i;
        }
    }
    return -1;
}


