function submitData(event) {
    event.preventDefault();
    const baseInput = parseInt(document.getElementById('baseInput').value);
    const multiplicativeInput = parseInt(document.getElementById('multiplicativeInput').value);
    const additiveInput = parseInt(document.getElementById('additiveInput').value);

    const result = procesarRecurrencia(baseInput, multiplicativeInput, additiveInput);
    document.getElementById('result').innerHTML = 'Resultado: ' + result;
    console.log('Result', result);
}

function procesarPregunta(event) {
    event.preventDefault();

    const form = event.target; // Accede al formulario que disparó el evento
    const numeroPregunta = form.querySelector('.numeroPregunta').value;
    const opcion = form.querySelector('.opcion').value;
    const resultadoDiv = form.nextElementSibling; // Asumiendo que el div de resultado siempre sigue al formulario

    const result = registroDePreguntas(numeroPregunta, opcion);
    resultadoDiv.innerHTML = 'Resultado: ' + (result ? 'Correcto' : 'Incorrecto');
    console.log('Result', result);

    form.querySelector('.opcion').value = ''; // Limpia el campo de entrada
}


function procesarRecurrencia(base, multiplier, additive) {
    const result = (base * multiplier) + additive;
    return result;
}

const respuestasCorrectas = {
    1: '2',
    2: '3',
    3: '1',
    4: '1',
    5: '1',
    6: '2',
    7: '1',
    // Añade más preguntas y respuestas según sea necesario
};

function registroDePreguntas(pregunta, opcion) {
    // Verificar si la opción proporcionada coincide con la respuesta correcta
    if (respuestasCorrectas[pregunta] === opcion) {
        return true;  // La respuesta es correcta
    } else {
        return false;  // La respuesta es incorrecta
    }
}

