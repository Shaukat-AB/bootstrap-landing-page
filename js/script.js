const carouselItem = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll('.indicator');

const returnActiveCarouelIndex = (target)=>{
   let index = 0;
   target.forEach((element,i) => {
      if(element.classList.contains('active')){
         index = i;
      }
    });
    return index;
}

const addClassAtIndexOf = (constant, index = 0) => {
   indicators[index + constant].classList.add('active');
   carouselItem[index + constant].classList.add('active');
}

const change = (btn)=>{
   let index = returnActiveCarouelIndex(carouselItem);
   indicators[index].classList.remove('active');
   carouselItem[index].classList.remove('active');
   if(btn.dataset.slide === 'next') next(index);
   else pre(index);
}
const next = (index)=>{
   if(index === 2 ) { addClassAtIndexOf(0); }
   else { addClassAtIndexOf(1, index); }
}

const pre = (index)=>{
   if(index === 0 ) { addClassAtIndexOf(2); }
   else { addClassAtIndexOf(-1, index); } 
}