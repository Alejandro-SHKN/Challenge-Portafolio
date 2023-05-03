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

  //NODE
  let divNodeOriginal = document.getElementById('ID-div__containerLogoyTextoNode--Skills');
let divNodeModificado = document.getElementById('ID-preload-div__containerLogoyTextoNode--Skills');

divNodeOriginal.addEventListener('click', function(){
  if(divNodeOriginal.style.opacity != '9'){
    divNodeOriginal.style.opacity = 0;
    divNodeModificado.style.opacity = 1;
    divNodeModificado.style.zIndex = 1;
    divNodeModificado.style.marginBottom = '60px';
  }
});

divNodeModificado.addEventListener('click',function(){
  divNodeOriginal.style.opacity = 1;
  divNodeModificado.style.opacity = 0;
  divNodeModificado.style.zIndex = -1;
  divNodeModificado.style.marginBottom = '0px';
});

//React
let divReactOriginal = document.getElementById(`ID-div__containerLogoyTextoReact--Skills`);
let divReactModificado = document.getElementById(`ID-preload-div__containerLogoyTextoReact--Skills`);

divReactOriginal.addEventListener(`click`, function(){
  if(divReactOriginal.style.opacity != `0`){
    divReactOriginal.style.opacity = 0;
    divReactModificado.style.opacity = 1;
    divReactModificado.style.zIndex = 1;
    divReactModificado.style.marginBottom = `60px`;
  }
});

divReactModificado.addEventListener(`click`,function(){
  if(divReactModificado.style.opacity == 1 ){
    divReactOriginal.style.opacity = 1;
    divReactModificado.style.opacity = 0;
    divReactModificado.style.zIndex = -1;
    divReactModificado.style.marginBottom = `0px`;
  }
});
