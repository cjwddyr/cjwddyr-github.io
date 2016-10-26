var arr = [];
if (localStorage.myData) {
    arr = JSON.parse(localStorage.myData);
}
var html = template('table', { list: arr, title: "显示器" });
document.querySelector('#content').innerHTML = html;

var anniu = document.querySelector('#chaanniu');
var chaxun = document.querySelector('#chaxun');
var quanbu = document.querySelector('#quanbu');

anniu.addEventListener('click', function () {
    if (chaxun.value) {
        var result = arr.filter(function (item) {
            if (item.name == chaxun.value || item.sex == chaxun.value || item.age == chaxun.value || item.hobby == chaxun.value) {
                return item;
            }
        });
        // console.log(result);
        var html = template('table', { list: result, title: "显示器" });
        document.querySelector('#content').innerHTML = html;
    }
});

quanbu.addEventListener('click', function(){
    var html = template('table', { list: arr, title: "显示器" });
    document.querySelector('#content').innerHTML = html;
});

