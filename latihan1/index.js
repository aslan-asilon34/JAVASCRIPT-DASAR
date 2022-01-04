function plus() {
    var a = document.getElementById('count').textContent;
    var b = parseInt(a);
    var c = b + 1;
    document.getElementById('count').innerHTML = c;
  }
  
  function minus() {
    var a = document.getElementById('count').textContent;
    var b = parseInt(a);
    var c = b - 1;
    document.getElementById('count').innerHTML = c;
  }

window.onload = function () {
    plus();
    minus();
}