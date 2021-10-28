function incrementStrike(){
    var element = document.getElementById('incrementStrike');
    var value = element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById('incrementStrike').innerHTML = value;
  }
  function incrementBall(){
    var element = document.getElementById('incrementBall');
    var value = element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById('incrementBall').innerHTML = value;
  }