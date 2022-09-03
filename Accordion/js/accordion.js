'use strict'

let accordionElement = document.getElementsByClassName("faq");

  for (let i=0; i< accordionElement.length; i++){
    accordionElement[i].addEventListener('click',function(){
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.display == 'block') {
        panel.style.display = 'none';
      }
      else {
        panel.style.display='block';
      }
    });
  }