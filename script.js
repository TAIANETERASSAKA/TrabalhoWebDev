const radios = document.getElementsByName('radio');


radios.forEach(radio => {
  radio.addEventListener('click', function() {
    if (radio.value == '1') {
      document.getElementById('img1').classList.remove('hidden');
      
      if(document.getElementById('img2').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img2').classList.add('hidden');
      }

      if(document.getElementById('img3').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img3').classList.add('hidden');
      }
    } else if (radio.value == '2') {
      document.getElementById('img2').classList.remove('hidden');

      if(document.getElementById('img1').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img1').classList.add('hidden');
      }

      if(document.getElementById('img3').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img3').classList.add('hidden');
      }


      
    } else if (radio.value == '3') {
      document.getElementById('img3').classList.remove('hidden');

      if(document.getElementById('img1').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img1').classList.add('hidden');
      }

      if(document.getElementById('img2').classList.contains('hidden')){
        //nao faz nada
      }else{
        document.getElementById('img2').classList.add('hidden');
      }
    }
  });
});
