
var arr = JSON.parse(localStorage.myData);

var span = document.querySelector('#shanchu');
var shanName = document.querySelector('#churu');
var quxiao = document.querySelector('#quxiao');

span.addEventListener('click', function () {
    if (shanName.value) {
        var result = arr.filter(function (item) {
            if (item.name == shanName.value) {
                return item;
            }
        });
        var a = indexSan(result[0]);
        if (a > -1) {
            arr.splice(a, 1);
            localStorage.myData = JSON.stringify(arr);
            location.href = "index.html";
        }
    }
    else{
        alert('请输入你要删除的名字');
    }
});

function indexSan(result) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == result) {
            return i;
        }
    }
    return -1;
}

quxiao.addEventListener('click', function(){
    location.href = "index.html";
});