
const calculate = document.getElementById('calculate');



function imc() {

    const name = document.getElementById('name').value;
    const heigth = document.getElementById('heigth').value;
    const weigth = document.getElementById('weigth').value;
    const result = document.getElementById('result');

     

    if (name !== '' && heigth !== '' && weigth !== '') {
      
        const valueIMC = (weigth / (heigth * heigth)).toFixed(1);

        let classification = '';

        if (valueIMC < 18.5) {
            classification = 'abaixo do peso.';
        }
        else if (valueIMC < 24.9) {
            classification = 'no peso normal';
        }
        else if (valueIMC < 29.9) {
            classification = 'sobrepeso';
        }
        else if (value < 34.9) {
            classification = 'em obesidade grau I';
        }
        else if (value < 39,9) {
            classification = 'em obesidade grau II';
        }
        else if (value > 40) {
            classification = 'em obesidade grau III';
        }

        result.textContent = `${name} seu IMC é ${valueIMC} e você está ${classification}`;
        
    } else {
        result.textContent = 'Preencha todos os campos!!!';

    }
    

}

calculate.addEventListener('click', imc);