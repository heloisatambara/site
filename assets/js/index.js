function myFunction(id1, id2) {
    // Get the checkbox
    var checkBox = document.getElementById(id1);
    // Get the output text
    var text = document.getElementById(id2);
  
    document.getElementById('carinhop').style.fontSize = "0";
    document.getElementById('humildadep').style.fontSize = "0";
    document.getElementById('carismap').style.fontSize = "0";

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.fontSize = '1.5rem';
    } else {
      text.style.fontSize = "0";
    }

    console.log(text)
  }