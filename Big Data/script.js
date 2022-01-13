
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
