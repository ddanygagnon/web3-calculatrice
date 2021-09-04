const calculateBtnElement = document.getElementById('calc');
const operatorInputElement = document.getElementById('operateur');

const allOperators = [
    {
        operator: '*',
        operation: (a, b) => a * b,
    },
    {
        operator: '+',
        operation: (a, b) => a + b,
    },
    {
        operator: '-',
        operation: (a, b) => a - b,
    },
    {
        operator: '/',
        operation: (a, b) => a / b,
    },
    {
        operator: '**',
        operation: (a, b) => a ** b,
    },
    {
        operator: 'any',
        operation: (a, b) => `${a}${b}`,
    },
];

function operation(operatorValue) {
    const currentOperation = allOperators.filter((o) => o.operator === operatorValue);
    return currentOperation.length === 0
        ? allOperators.filter((o) => o.operator === 'any')[0].operation
        : currentOperation[0].operation;
}

operatorInputElement.onchange = () => {
    const infoTextElement = document.getElementById('info');
    const isInArray =
        allOperators.filter((e) => e.operator === operatorInputElement.value).length > 0;

    infoTextElement.innerText = isInArray
        ? ''
        : `${operatorInputElement.value} utilise la concaténation.`;
};

calculateBtnElement.onclick = (e) => {
    e.preventDefault();
    const firstValue = Number(document.getElementById('valeur1').value);
    const secondValue = Number(document.getElementById('valeur2').value);
    const operatorValue = document.getElementById('operateur').value;
    const solutionInputElement = document.getElementById('solution');

    const results = operation(operatorValue)(firstValue, secondValue);

    solutionInputElement.setAttribute('value', results);
};
