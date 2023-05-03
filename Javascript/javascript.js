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

//CSS
let divCSSoriginal = document.getElementById(`ID-div__containerLogoyTextoCSS--Skills`);
let divCSSModificado = document.getElementById(`ID-preload-div__containerLogoyTextoCSS--Skills`);

divCSSoriginal.addEventListener(`click`, function(){
  if(divCSSoriginal.style.opacity != `9`){
    divCSSoriginal.style.opacity = 0;
    divCSSModificado.style.opacity = 1;
    divCSSModificado.style.zIndex = 1;
    divCSSModificado.style.marginBottom = `60px`;
  }
});

  divCSSModificado.addEventListener(`click`,function(){
    divCSSoriginal.style.opacity = 1;
    divCSSModificado.style.opacity = 0;
    divCSSModificado.style.zIndex = -1;
    divCSSModificado.style.marginBottom = `0px`;
  })