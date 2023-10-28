let imagenes = document.getElementsByClassName("interactiveImg");

for (let el of imagenes) {
  el.addEventListener("click", (e) => {
    var img1 = e.target.getAttribute("src");
    var aux=getComputedStyle(document.getElementsByClassName("main_2")[0]).getPropertyValue("background");
    console.log(aux);
    var regex=/images\/([^"]+).jpg/g;
    var img2=aux.match(regex)[0];
    document.querySelector(".main_2").style.backgroundImage = `url(${img1})`;
    e.target.setAttribute("src",img2);
  });
}