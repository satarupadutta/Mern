function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  