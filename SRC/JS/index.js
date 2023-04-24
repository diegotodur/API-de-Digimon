
document.title= "DIGI API"
const BASE_URL =  "https://www.digi-api.com/api/v1/digimon/"

function digiAPI () {
    let nombreDigimon = document.getElementById("input_name").value;

    let tarjetaError =  `
            
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small" ">
              <img src="./SRC/IMG/error.jpg" class="card-img-top" alt="...">
               <div class="card-body">
                     <div class="text-center">
                       <p id="diginame" class="card-text text-light ">ERROR</p>
                       <p id="digilevel" class="card-text text-light ">Digimon no Encontrado, Intente Nuevamente</p>
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

            let tarjeta = `
                <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle rounded-4 bg-info-subtle card-small" ">
                    <img src="${imgDigi}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="text-center">
                          <p id = "diginame" class="card-text text-light ">Nombre: ${nmDigi}</p>
                          <p id = "digilevel" class="card-text text-light ">Nivel: ${nvlDigi}</p>
                        </div>
                    </div>
                </div> 
            `;
            document.title= nmDigi;
            document.getElementById("card").innerHTML = tarjeta;
        })
        .catch(error => {
            document.getElementById("card").innerHTML = tarjetaError;
        });
}
