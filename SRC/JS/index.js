
document.title= "DIGI API"
const BASE_URL =  "https://www.digi-api.com/api/v1/digimon/"
let digiButton = document.getElementById("digiboton");

 let tarjetaloader = `
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small" style="width: 22rem; height: 30rem; border-radius: 20px;">
        <span class="loader position-absolute top-50 start-50 translate-middle"></span>
        <div class="card-body">
              <div class="text-center">
                <p id="diginame" class="card-text text-light"><strong>Developed with ❤️</strong></p>
                <p id="digilevel" class="card-text text-light"><strong>by itsmisce</strong></p>
              </div>
        </div>
        </div> 
        `;
digiButton.addEventListener('click', function() {
    let nombreDigimon = document.getElementById("input_name").value;
  
    let tarjetaError =  `
    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small fade-in" style="width: 22rem; height: 30rem; border-radius: 20px;">
    <img src="./SRC/IMG/error.jpg" class="card-img-top" alt="..." height="350px">
        <div class="card-body">
          <div class="text-center">
            <p id="diginame" class="card-text text-light">ERROR</p>
            <p id="digilevel" class="card-text text-light">Digimon no Encontrado, Intente Nuevamente</p>
          </div>
        </div>
      </div> 
    `;
  
    fetch(`${BASE_URL}${nombreDigimon}`)
      .then(response => response.json())
      .then(data => {
        let imgDigi = data.images[0].href
        let nmDigi = data.name
        let nvlDigi = data.levels[0].level
  
        let tarjetaloader = `
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small" style="width: 22rem; height: 30rem; border-radius: 20px;">
        <span class="loader position-absolute top-50 start-50 translate-middle"></span>
        <div class="card-body">
              <div class="text-center">
                <p id="diginame" class="card-text text-light"><strong>Developed with ❤️</strong></p>
                <p id="digilevel" class="card-text text-light"><strong>by itsmisce</strong></p>
              </div>
        </div>
        </div> 
        `;
  
        let tarjeta = `
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small fade-in" style="width: 22rem; height: 30rem; border-radius: 20px;">
        <img src="${imgDigi}" class="card-img-top fade-in" alt="..." height="350px" style="border-radius:10px;">
            <div class="card-body">
              <div class="text-center">
                <p id="diginame" class="card-text text-light"><strong>Nombre:</strong> ${nmDigi}</p>
                <p id="digilevel" class="card-text text-light"><strong>Nivel:</strong> ${nvlDigi}</p>
              </div>
            </div>
          </div> 
        `;
        document.title= nmDigi;
  
        document.getElementById("card").innerHTML = tarjetaloader;
        
        setTimeout(() => {
          document.getElementById("card").innerHTML = tarjeta; 
        }, 1000); // 3000 milliseconds = 3 seconds
      })
      .catch(error => {

        document.getElementById("card").innerHTML = tarjetaloader;
        setTimeout(() => {
            document.getElementById("card").innerHTML = tarjetaError;
        }, 1000); // 3000 milliseconds = 3 seconds
      });

})
    
