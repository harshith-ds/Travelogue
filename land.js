let inro=document.querySelector('.inro');
let logo=document.querySelector('.header');
let Span=document.querySelectorAll('.lo');
const images = document.querySelectorAll(".image");

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
       Span.forEach((span, idx)=>{
            setTimeout(()=>{
                  span.classList.add('active');
            },(idx + 1)*400)
       });
    //    setTimeout(()=>{
    //     Span.forEach((span,idx)=>{
    //         setTimeout(()=>{
    //             span.classList.remove('active');
    //             // span.classList.add('fade');
    //         },(idx + 1)*25)
    //     })
    //    },2000);
       setTimeout(()=>{
        inro.style.top='-100vh';
       },2300)
    })
})
const windowHeight = window.innerHeight;

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  for (let img of images) {
    const imageTop = img.getClientRects()[0].top;

    const backgroundPositionY = `-${
      scrollPosition - imageTop / windowHeight
    }px`;

    img.style.backgroundPositionY = backgroundPositionY;
  }
};

document.addEventListener("scroll", onScroll);

document.getElementById("profile-photo").addEventListener("click", function() {
  var popover = document.getElementById("popover");
  if (popover.style.display === "block") {
    popover.style.display = "none";
  } else {
    popover.style.display = "block";
  }
});