window.onload = function () {

// 繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
  const smoothScroll = document.querySelectorAll('a[href^="#"]');
 
  for (let i = 0; i < smoothScroll.length; i++){
  smoothScroll[i].addEventListener('click', (e) => {
    e.preventDefault();

    let href = smoothScroll[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;

    const position = rect + offset;

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  });
}

  //繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ螳溯｣�
  const Toggle = document.getElementById("Toggle");
  const NavMenu = document.getElementById("NavMenu");
  if(Toggle){
  Toggle.addEventListener('click',()=>{
      Toggle.classList.toggle("active");
      if(Toggle.classList.contains("active")){
         NavMenu.classList.add("active");
      }else{
         NavMenu.classList.remove("active"); 
      }
  });
}


let fadeInTarget = document.querySelectorAll('.fadein');
let windowHeight = window.innerHeight;
  

window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;

    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('active');
      console.log('active');
    }
  }
})
}
