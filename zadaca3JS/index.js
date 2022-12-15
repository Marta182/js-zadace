let randomNumber = Math.floor(Math.random() * 100) + 1;
let brojPokusaja = 0;

const pokusaji = document.getElementById("pokusaji");
const lowOrHi = document.getElementById("lowOrHi");
const submit = document.getElementById("submit");
const field = document.getElementById("field");
const broji = document.getElementById("broji");

      function provjeriPokusaj() {
        const pokusajOsobe = Number(field.value);
    
        if (pokusajOsobe === randomNumber) {
            pokusaji.innerHTML = 'Čestitamo, pogodili ste broj!';
            lowOrHi.innerHTML = '';
        } else {
            pokusaji.innerHTML = 'Pogrešno.';
          if(pokusajOsobe < randomNumber) {
            lowOrHi.innerHTML = 'Broj je veći, pokušajte ponovno.' ;
          } else if(pokusajOsobe > randomNumber) {
            lowOrHi.innerHTML = 'Broj je manji, pokušajte ponovno.';
          }
        }
        broji.innerHTML = `<p>Broj pokušaja: ${brojPokusaja+=1}</p>`;
      }

      submit.addEventListener('click', provjeriPokusaj);