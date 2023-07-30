
document.title = "DIGI API"
const url = "https://www.digi-api.com/api/v1/digimon/"
const urlAll = "https://digimon-api.vercel.app/api/digimon";
const digiButton = document.getElementById("digiboton");
const obtenerTodos = document.getElementById("digibotonAll");

const tarjetaloader = `
<div class="shadow-lg p-3 mb-5 bg-body-tertiary position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small" style="width: 22rem; height: 30rem; border-radius: 20px; background-color: rgb(112, 30, 30);
">
  <span class="loader position-absolute top-50 start-50 translate-middle"></span>
  <div class="card-body">
    <div class="text-center">
      <p id="diginame" class="card-text text-light"><strong>Developed with ❤️</strong></p>
      <p id="digilevel" class="card-text text-light"><strong>by itsmisce</strong></p>
    </div>
  </div>
</div>
`;

const loaderSolo = `
  <span class="loader position-absolute top-50 start-50 translate-middle"></span>
`;

const tarjetaError = `
<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small fade-in" style="width: 22rem; height: 30rem; border-radius: 20px;  background-color: rgb(112, 30, 30)">
  <img src="./SRC/IMG/error.jpg" class="card-img-top borrarfondo" alt="..." hheight="80%" width="60%" style="border-radius: 10px">
    <div class="card-body">
       <div class="text-center">
        <p id="diginame" class="card-text text-light">ERROR</p>
        <p id="digilevel" class="card-text text-light">Digimon no Encontrado, Intente Nuevamente</p>
       </div>
    </div>
</div>
`;

digiButton.addEventListener('click', function () {
  let nombreDigimon = document.getElementById("input_name").value;

  fetch(`${url}${nombreDigimon}`)
    .then(response => response.json())
    .then(data => {
      const imgDigi = data.images[0].href
      const nmDigi = data.name
      const nvlDigi = data.levels[0].level

      const tarjeta = `
      <div
        class="shadow-lg p-3 mb-5 bg-body-tertiary position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small"
        style="width: 22rem; height: 30rem; border-radius: 20px; background-color: rgb(112, 30, 30)">       
           <img src="${imgDigi}" class="card-img-top fade-in" alt="..."height="80%" width="60%" style="border-radius:10px">
           <div class="card-body">
              <div class="text-center">
                <p id="diginame" class="card-text text-light"><strong>Nombre:</strong> ${nmDigi}</p>
                <p id="digilevel" class="card-text text-light"><strong>Nivel:</strong> ${nvlDigi}</p>
              </div>
           </div>
      </div> 
        `;

      document.getElementById("cardAll").innerHTML = ""; // Mostramos todas las tarjetas generadas
      document.getElementById("card").innerHTML = tarjetaloader;
      setTimeout(() => {
        document.getElementById("card").innerHTML = tarjeta;
      }, 1000);
    })
    .catch(error => {
      document.getElementById("card").innerHTML = tarjetaloader;
      setTimeout(() => {
        document.getElementById("card").innerHTML = tarjetaError;
      }, 1000);
    });

})

obtenerTodos.addEventListener('click', function () {
  fetch(urlAll)
    .then(response => response.json())
    .then(data => {
      let tarjetasDigimon = '';
      for (const digimon of data) {
        tarjetasDigimon += `
          <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-relative" style="width: 22rem; height:30rem; border-radius: 20px;">
            <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}" style="border-radius: 10px;">
            <div class="card-body">
              <div class="text-center">
                <p class="card-text" style="color:white;"><strong>Nombre: </strong>${digimon.name}</p>
                <p class="card-text" style="color:white;"><strong>Nivel: </strong>${digimon.level}</p>
              </div>
            </div>
          </div>
        `;
      }

      document.getElementById("card").innerHTML = "";
      document.getElementById("cardAll").innerHTML = loaderSolo;
      setTimeout(() => {
        document.getElementById("cardAll").innerHTML = tarjetasDigimon;
      }, 1000);
    })
    .catch(error => {
      document.getElementById("card").innerHTML = tarjetaError;
    });
});


