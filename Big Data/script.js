java script
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
