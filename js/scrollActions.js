const scrollUp=document.querySelector(".scroll-up");scrollUp.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),scrollUp.style.display="none",window.addEventListener("scroll",(()=>{0===window.scrollY?scrollUp.style.display="none":scrollUp.style.display="flex"}));const navbar=document.querySelector(".navbar");window.addEventListener("scroll",(()=>{window.scrollY>0?navbar.style.backgroundColor="rgba(0, 0, 0, 0.5)":navbar.style.backgroundColor="transparent"}));