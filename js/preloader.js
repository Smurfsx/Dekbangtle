const canvas=document.getElementById("animation"),renderer=new THREE.WebGLRenderer({canvas:canvas}),camera=new THREE.PerspectiveCamera(75,2,.1,5),scene=new THREE.Scene;camera.position.z=2;const geometry=new THREE.SphereGeometry(1,12,12),material=new THREE.MeshBasicMaterial({color:65280,wireframe:!0}),cube=new THREE.Mesh(geometry,material);function render(e){e*=.001,cube.rotation.x=e,cube.rotation.y=e,renderer.render(scene,camera),requestAnimationFrame(render)}scene.add(cube),cube.material.color.setHex(14203135),renderer.setClearColor(0,0),requestAnimationFrame(render),window.addEventListener("load",(()=>{const e=document.querySelector(".preload");setTimeout((()=>{e.classList.add("preload-finish")}),0)}));