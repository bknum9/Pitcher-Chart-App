function incrementStrike(){
    var element = document.getElementById('incrementStrike');
    var value = element.innerHTML;

    ++value;
    if (value == 3){
      window.clearInterval('incrementStrike');
      value = 0;
    }
    console.log(value);
    document.getElementById('incrementStrike').innerHTML = value;
  }
  function incrementBall(){
    var element = document.getElementById('incrementBall');
    var value = element.innerHTML;

    ++value;
    if (value == 4){
      window.clearInterval('incrementBall');
      value = 0;
    }
    console.log(value);
    document.getElementById('incrementBall').innerHTML = value;
  }
  function content(elem) {
    elem.style.backgroundColor = "red";
  }
