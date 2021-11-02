function incrementStrike(){
    var element = document.getElementById('incrementStrike');
    var value = element.innerHTML;

    ++value;
<<<<<<< HEAD
    if (value == 3){
      window.clearInterval('incrementStrike');
      value = 0;
    }
=======
>>>>>>> 8a4efb9ea11a47054f0ff8fb83d8ef74fa94f6e5
    console.log(value);
    document.getElementById('incrementStrike').innerHTML = value;
  }
  function incrementBall(){
    var element = document.getElementById('incrementBall');
    var value = element.innerHTML;

    ++value;
<<<<<<< HEAD
    if (value == 4){
      window.clearInterval('incrementBall');
      value = 0;
    }
    console.log(value);
    document.getElementById('incrementBall').innerHTML = value;
  }
  function togglePopup(){
    document.getElementById("pitchinfopop").classList.toggle('active');
  }

  function content(elem) {
    elem.style.backgroundColor = "red";
  }
=======
    console.log(value);
    document.getElementById('incrementBall').innerHTML = value;
  }
>>>>>>> 8a4efb9ea11a47054f0ff8fb83d8ef74fa94f6e5
