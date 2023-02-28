/*// Get all the section elements
const sections = document.querySelectorAll('div[id^="section"]');

// Create a new IntersectionObserver object
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get the ID of the current section
      const currentSectionId = entry.target.getAttribute('id');
      
    

       // Add the 'active' class to the menu item corresponding to the current section
       document.querySelector(`nav a[href="#${currentSectionId}"]`).classList.add('active');

         // Remove the 'active' class from all menu items
      document.querySelectorAll('.nav-item a').forEach(link => {
        link.classList.remove('active');
      });
      }
    });
  });

  // Observe each section element
sections.forEach(function (section) {
    observer.observe(section);
  });
  **/

 //* const observer = new IntersectionObserver(entries => {
    /*entries.forEach(entry => {
      const menuItem = document.querySelector(`[data-section="${entry.target.id}"]`);
      if (entry.isIntersecting) {
        menuItem.classList.add('active');
      } else {
        menuItem.classList.remove('active');
      }
    });
  });

  const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
})
*/


window.onload = function() {



  var button1 = document.getElementById("button1")
  var cuadro1 = document.getElementById("card1")
  var close1 = document.getElementById("closebut1")

  var button2 = document.getElementById("button2")
  var cuadro2 = document.getElementById("card2")
  var close2 = document.getElementById("closebut2")

  var button3 = document.getElementById("button3")
  var cuadro3 = document.getElementById("card3")
  var close3 = document.getElementById("closebut3")

  var button4 = document.getElementById("button4")
  var cuadro4 = document.getElementById("card4")
  var close4 = document.getElementById("closebut4")


  var button5 = document.getElementById("button5")
  var cuadro5 = document.getElementById("card5")
  var close5 = document.getElementById("closebut5")











  function abridor1() {
    console.log("hola")
    cuadro1.style.display = "flex"
    button1.style.display = "none"
    close1.style.display = "flex"



  }

  function abridor2() {
    console.log("hola")
    cuadro2.style.display = "flex"
    button2.style.display = "none"
    close2.style.display = "flex"


  }

  function abridor3() {
    console.log("hola")
    cuadro3.style.display = "flex"
    button3.style.display = "none"
    close3.style.display = "flex"


  }

  function abridor4() {
    console.log("hola")
    cuadro4.style.display = "flex"
    button4.style.display = "none"
    close4.style.display = "flex"


  }

  function abridor5() {
    console.log("hola")
    cuadro5.style.display = "flex"
    button5.style.display = "none"
    close5.style.display = "flex"


  }

 





  function cerrador1() {
    console.log("hola")
    cuadro1.style.display = "none"
    button1.style.display = "flex"
    close1.style.display = "none"


  }

  function cerrador2() {
    console.log("hola")
    cuadro2.style.display = "none"
    button2.style.display = "flex"
    close2.style.display = "none"


  }

  function cerrador3() {
    console.log("hola")
    cuadro3.style.display = "none"
    button3.style.display = "flex"
    close3.style.display = "none"


  }

  function cerrador4() {
    console.log("hola")
    cuadro4.style.display = "none"
    button4.style.display = "flex"
    close4.style.display = "none"


  }

  function cerrador5() {
    console.log("hola")
    cuadro5.style.display = "none"
    button5.style.display = "flex"
    close5.style.display = "none"


  }



  
  button1.addEventListener("click", abridor1)
  button2.addEventListener("click", abridor2)
  button3.addEventListener("click", abridor3)
  button4.addEventListener("click", abridor4)
  button5.addEventListener("click", abridor5)

  close1.addEventListener("click", cerrador1)
  close2.addEventListener("click", cerrador2)
  close3.addEventListener("click", cerrador3)
  close4.addEventListener("click", cerrador4)
  close5.addEventListener("click", cerrador5)

  var formc = document.getElementById("formc");
  formc.addEventListener("submit", validate)


  function validate(e){

      e.preventDefault();

      var email = document.getElementById("mail").value;
      var comentario = document.getElementById("comentario").value
      var expMail = /\w+@\w+\.+[a-z]/;

      if(email === "" ){
          alert("Inserte email");
          return false
      }

      if (!expMail.test(email)) {
          alert("Ingresar con formato de email");
          return false;
      }

      if(comentario ===""){
          alert("Inserte comentario")
          return false
      }


      else {
          alert("Enviados")
      }
     
} return true
  

}


