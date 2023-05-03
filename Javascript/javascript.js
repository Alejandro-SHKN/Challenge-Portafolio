// Javascript aplicado a la seccion SKILLS
// HTML5
let divHTMLoriginal = document.getElementById(`ID-div__containerLogoyTextoHTML--Skills`)
let divHTMLModificado = document.getElementById(`ID-preload-div__containerLogoyTextoHTML--Skills`)

  divHTMLoriginal.addEventListener(`click`, function(){
    if (divHTMLoriginal.style.display !== `none`){
      divHTMLoriginal.style.display = `none`
      divHTMLModificado.style.display = `flex`
    } 
  });

  divHTMLModificado.addEventListener(`click`, function(){
    if(divHTMLModificado.style.display != `none`){
      divHTMLModificado.style.display = `none`
      divHTMLoriginal.style.display = `block`
    }
  })

// Javascript
let divJSoriginal = document.getElementById(`IDdiv__containerLogoyTextoJS--Skills`)
let divJSModificado = document.getElementById(`ID-preload-div__containerLogoyTextoJS--Skills`)
 divJSoriginal.addEventListener(`click`, function(){
  if(divJSoriginal.style.opacity != `1`){
    divJSoriginal.style.opacity = 0
    divJSModificado.style.opacity = 1;
    divJSModificado.style.zIndex = 1;
    divJSModificado.style.marginBottom = `60px`;
  }
})

divJSModificado.addEventListener(`click`, function(){
  if(divJSModificado.style.opacity == 1){
    divJSoriginal.style.opacity = 2
    divJSModificado.style.opacity = 0
    divJSModificado.style.zIndex = -1;
    divJSModificado.style.marginBottom = `0`;
    
    }
 })