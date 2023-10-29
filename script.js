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
        descLugar.innerHTML="<br>El Cristo Redentor es una icónica estatua de Jesús en Río de Janeiro, Brasil,<br> que se alza majestuosamente en el cerro del Corcovado.<br> Es un símbolo emblemático de la ciudad y del cristianismo, con vistas panorámicas impresionantes de la región.";
        break;
      case "images/norruega.jpg":
        paisLugar.innerText="Noruega";
        nombreLugar.innerText="LOFOTEN ISLANDS";
        descLugar.innerHTML="<br>Las Islas Lofoten en Noruega son famosas por su belleza natural,<br> con montañas escarpadas, playas de arena blanca y encantadores pueblos pesqueros.<br> Es un destino esencial para amantes de la naturaleza y la aventura en el Ártico.";
        break;
      case "images/rusia.jpg":
        paisLugar.innerText="Rusia";
        nombreLugar.innerText="CATEDRAL DE SAN BASILIO";
        descLugar.innerHTML="<br>La Catedral de San Basilio es un emblemático edificio en la Plaza Roja de Moscú,<br> famosa por sus coloridas cúpulas en forma de cebolla y su rica historia.<br> Un sitio inolvidable para los amantes de la arquitectura y la cultura rusa.";
        break;
      case "images/grecia.jpg":
        paisLugar.innerText="Grecia";
        nombreLugar.innerText="SANTORINI";
        descLugar.innerHTML="<br>Santorini es una impresionante isla griega en el mar Egeo,<br> conocida por sus icónicas casas blancas con techos azules y sus espectaculares vistas al mar.<br> Un destino obligatorio para los amantes de la belleza escénica y la cultura mediterránea.";
        break;
      case "images/japon.jpg":
        paisLugar.innerText="Japon";
        nombreLugar.innerText="SANNENZAKA";
        descLugar.innerHTML="<br>Sannenzaka es una encantadora calle empedrada en Kioto, Japón,<br> famosa por su arquitectura tradicional y su ambiente histórico.<br> Un lugar imprescindible para quienes buscan la auténtica cultura japonesa.";
        break;
      case "images/machu.jpg":
        paisLugar.innerText="Peru";
        nombreLugar.innerText="MACHU PICCHU";
        descLugar.innerHTML="<br>Machu Picchu es una antigua ciudad inca en Perú,<br> conocida por su asombrosa arquitectura en las montañas.<br>Un destino imperdible para los amantes de la historia <br>y la belleza natural.";
        break;
    }
  });
}
