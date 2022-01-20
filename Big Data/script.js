
var up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth / 2 - 130 / 2,
    y = window.innerHeight / 2 - 130 / 2

var div = document.getElementById('diver');
document.addEventListener('keydown', press)
function press(e) {
    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */) {
        up = true
        div.classList.add('up');
    }
    if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */) {
        right = true
        div.classList.add('right');
    }
    if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */) {
        down = true
        div.classList.add('down');
    }
    if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */) {
        left = true
        div.classList.add('left');
    }
}
document.addEventListener('keyup', release)
function release(e) {
    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */) {
        up = false
        div.classList.remove('up');
    }
    if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */) {
        right = false
        div.classList.remove('right');
    }
    if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */) {
        down = false
        div.classList.remove('down');
    }
    if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */) {
        left = false
        div.classList.remove('left');
    }
}
    function gameLoop() {

    var divinfo = div.getBoundingClientRect();

    if (up && div.offsetTop > 0 )  {
        y = y - 10
    }
    if (right && div.offsetLeft <  window.innerWidth - divinfo.width) {
        x = x + 10
    }
    if (down && div.offsetTop <  window.innerHeight - divinfo.height) {
        y = y + 10
    }
    if (left && div.offsetLeft > 0) {
        x = x - 10
    }
    div.style.left = x + 'px'
    div.style.top = y + 'px'

    console.log(div.style.left);
    console.log(div.style.top);
    window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

    let image_tracker = 'normal'
    function change(){
      let image = document.getElementById('win');
      if(image_tracker=='normal'){
        image.src='assets/Bilder/MagischeMiesmuschelWin.png';
        image_tracker = 'perl';
      }else{
        image.src='assets/Bilder/MagischeMiesmuschel.png';
        image_tracker = 'normal'
      }
    }

    let picture_tracker = 'normal'
    function exchange(){
      let picture = document.getElementById('victory');
      if(picture_tracker=='normal'){
        picture.src='assets/Bilder/MagischeMiesmuschelWin.png';
        picture_tracker = 'perl';
      }else{
        picture.src='assets/Bilder/MagischeMiesmuschel.png';
        picture_tracker = 'normal'
      }
    }

    let pic_tracker = 'normal'
    function changing(){
      let pic = document.getElementById('fail');
      if(pic_tracker=='normal'){
        pic.src='assets/Bilder/MagischeMiesmuschelFail.png';
        pic_tracker = 'noperl';
      }else{
        pic.src='assets/Bilder/MagischeMiesmuschel.png';
        pic_tracker = 'normal'
      }
    }

    let miesmuschel_tracker = 'normal'
    function exchanging(){
      let miesmuschel = document.getElementById('success');
      if(miesmuschel_tracker=='normal'){
        miesmuschel.src='assets/Bilder/MagischeMiesmuschelWin.png';
        miesmuschel_tracker = 'perl';
      }else{
        miesmuschel.src='assets/Bilder/MagischeMiesmuschel.png';
        miesmuschel_tracker = 'normal'
      }
    }

    let muschel_tracker = 'normal'
    function switching(){
      let muschel = document.getElementById('successful');
      if(muschel_tracker=='normal'){
        muschel.src='assets/Bilder/MagischeMiesmuschelWin.png';
        muschel_tracker = 'perl';
      }else{
        muschel.src='assets/Bilder/MagischeMiesmuschel.png';
        muschel_tracker = 'normal'
      }
    }

    let shell_tracker = 'normal'
    function flip(){
      let shell = document.getElementById('notRight');
      if(shell_tracker=='normal'){
        shell.src='assets/Bilder/ShellFail.png';
        shell_tracker = 'noperl';
      }else{
        shell.src='assets/Bilder/Shell.png';
        shell_tracker = 'normal'
      }

    }
    let shellState_tracker = 'normal'
    function overturn(){
      let shellState = document.getElementById('incorrect');
      if(shellState_tracker=='normal'){
        shellState.src='assets/Bilder/ShellFail.png';
        shellState_tracker = 'noperl';
      }else{
        shellState.src='assets/Bilder/Shell.png';
        shellState_tracker = 'normal'
      }
    }

    let State_tracker = 'normal'
    function flipper(){
      let State = document.getElementById('correct');
      if(State_tracker=='normal'){
        State.src='assets/Bilder/ShellWin.png';
        State_tracker = 'perl';
      }else{
        State.src='assets/Bilder/Shell.png';
        State_tracker = 'normal'
      }
    }
    </script>

</head>
