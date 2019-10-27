var canvas = document.getElementById("item");
var ctx = canvas.getContext("2d");
var button4x4 = document.getElementById("4x4");
var button32x32 = document.getElementById("32x32");
var button256x256 = document.getElementById("256x256");
button4x4.addEventListener("click", ClickOn4, false);
button32x32.addEventListener("click", ClickOn32, false);
button256x256.addEventListener("click", ClickOn256, false);
var flag = false;
function ClickOn4() {
  button4x4.style.background = "#858282";
  button4x4.style.color = "#fff";
  button32x32.style.background = "#fff";
  button32x32.style.color = "#000";
  button256x256.style.background = "#fff";
  button256x256.style.color = "#000";
  var requestURL = "assets/4x4.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  var Matrix;
  request.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Matrix = request.response;
    var arr = [].concat(...Matrix);
    var counter = 0;
    for (let i = 0; i < 512; i += 512 / 4) {
      for (let j = 0; j < 512; j += 512 / 4) {
        ctx.fillStyle = "#" + arr[counter];
        ctx.fillRect(i, j, 128, 128);
        counter++;
      }
    }
  };
}
function ClickOn32() {
  button4x4.style.background = "#fff";
  button4x4.style.color = "#000";
  button32x32.style.background = "#858282";
  button32x32.style.color = "#fff";
  button256x256.style.background = "#fff";
  button256x256.style.color = "#000";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var requestURL = "assets/32x32.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  var Matrix;
  request.onload = function() {
    Matrix = request.response;
    var arr = [].concat(...Matrix);
    var counter = 0;
    for (let i = 0; i < 512; i += 16) {
      for (let j = 0; j < 512; j += 16) {
        ctx.fillStyle =
          "rgb(" +
          arr[counter][0] +
          "," +
          arr[counter][1] +
          "," +
          arr[counter][2] +
          ")";
        console.log(ctx.fillStyle);
        ctx.fillRect(i, j, 16, 16);
        counter++;
      }
    }
  };
}
function ClickOn256() {
  button4x4.style.background = "#fff";
  button4x4.style.color = "#000";
  button32x32.style.background = "#fff";
  button32x32.style.color = "#000";
  button256x256.style.background = "#858282";
  button256x256.style.color = "#fff";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  base_image = new Image();
  base_image.src = "assets/image.png";
  base_image.addEventListener(
    "load",
    function() {
      ctx.drawImage(base_image, 0, 0, canvas.height, canvas.width);
    },
    false
  );
}
