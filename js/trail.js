var dots=[],mouse={x:0,y:0},Dot=function(){var t;this.x=0,this.y=0,this.node=((t=document.createElement("div")).className="trail",document.body.appendChild(t),t)};Dot.prototype.draw=function(){this.node.style.left=this.x+"px",this.node.style.top=this.y+"px"};for(var i=0;i<12;i++){var d=new Dot;dots.push(d)}function draw(){var t=mouse.x,e=mouse.y;dots.forEach((function(o,n,a){var i=a[n+1]||a[0];o.x=t,o.y=e,o.draw(),t+=.6*(i.x-o.x),e+=.6*(i.y-o.y)}))}function animate(){draw(),requestAnimationFrame(animate)}addEventListener("mousemove",(function(t){t.preventDefault(),mouse.x=t.pageX,mouse.y=t.pageY})),addEventListener("click",(function(t){var e=new Audio("public/sound/click.wav");e.volume=.1,e.play(),dots.forEach((function(t){t.node.style.transform="scale(1.5)"})),setTimeout((function(){dots.forEach((function(t){t.node.style.transform="scale(1)"}))}),100)})),animate();