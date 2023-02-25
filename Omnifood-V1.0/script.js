///////////////////////////////////////////////////////////
// Make Mobile Navigation work 
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function (){
  headerEL.classList.toggle("nav-open");
});


///////////////////////////////////////////////////////////
// Sticky Navigation 

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);
  if(ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }
  if(ent.isIntersecting ){
    document.body.classList.remove('sticky')
  }
},
{
  root:null , threshold:0,rootMargin:"-80px "
});
obs.observe(sectionHeroEL);




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();


