// ========Coder By AslanAsilon======
var Text = 'Selamat PAGi semua halOo aSLan';
document.write('<h1> Format judul = </h1>'+ '<h4>'+formatKapital(Text)+'</h4>');

function formatKapital(str){
    return str.replace(/\w\S*/g,
        function(txt)
        { return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase(); });
}

function formatBiasa(){
    var str = Text;
    var res = str.toLowerCase();
    document.getElementById("result").innerHTML = res
 }

function kecil(){
    var str = 'Selamat PAGi semua halOo aSLan';
    var res = toLowerCase(str);
    return res;
}
document.getElementById('app').innerHTML = res;


// function kecil(){
//     var Text = 'Selamat PAGi semua halOo aSLan';
//     var Hasil = toLowerCase(Text);
//     return Hasil;
// }


//document.getElementById('app').innerHTML = kecil();

  window.onload = function () {
       formatKapital();
 }

//document.getElementById('app').innerHTML = 'maka '. kapital();