let imagenes = document.getElementsByClassName("interactiveImg");
const main2=document.querySelector(".main_2");

for (let el of imagenes) {
  el.addEventListener("click", (e) => {
    var img1 = e.target.getAttribute("src");
    var aux=getComputedStyle(main2).getPropertyValue("background");
    var regex=/images\/([^"]+).jpg/g;
    var img2=aux.match(regex)[0];
    var backgroundStyle = `linear-gradient(to top, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 50%), url(${img1}), no-repeat`;
    main2.style.background = backgroundStyle;
    main2.style.backgroundSize = "cover";
    main2.style.backgroundPosition = "center";
    //main2.css({"background": backgroundStyle});
    e.target.setAttribute("src",img2);
    var paisLugar=document.querySelector("div.descripcion h4");
    var nombreLugar=document.querySelector("div.descripcion h1");
    var descLugar=document.querySelector("div.descripcion p");
    switch (img1) {
      case "images/brasil.jpg":
        paisLugar.innerText="Brasil";
        nombreLugar.innerText="CRISTO REDENTOR";
        descLugar.innerText="";
        break;
      case "images/norruega.jpg":
        paisLugar.innerText="Noruega";
        nombreLugar.innerText="LOFOTEN ISLANDS";
        descLugar.innerText="";
        break;
      case "images/rusia.jpg":
        paisLugar.innerText="Rusia";
        nombreLugar.innerText="CATEDRAL DE SAN BASILIO";
        descLugar.innerText="";
        break;
      case "images/grecia.jpg":
        paisLugar.innerText="Grecia";
        nombreLugar.innerText="SANTORINI";
        descLugar.innerText="";
        break;
      case "images/japon.jpg":
        paisLugar.innerText="Japon";
        nombreLugar.innerText="SANNENZAKA";
        descLugar.innerText="";
        break;
      case "images/machu.jpg":
        paisLugar.innerText="Peru";
        nombreLugar.innerText="MACHU PICCHU";
        descLugar.innerHTML="<br>Machu Picchu es una antigua ciudad inca en Perú,<br> conocida por su asombrosa arquitectura en las montañas.<br>Un destino imperdible para los amantes de la historia <br>y la belleza natural.";
        break;
    }
  });
}
