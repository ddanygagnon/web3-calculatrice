const calculateBtn = document.getElementById('calc');
const operator = document.getElementById('operateur');

const opr = [
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

function operation(arg) {
    const filtered = opr.filter((o) => o.operator === arg);
    return filtered.length === 0
        ? opr.filter((o) => o.operator === 'any')[0].operation
        : filtered[0].operation;
}

operator.onchange = () => {
    const info = document.getElementById('info');
    const isInArray = opr.filter((e) => e.operator === operator.value).length > 0;

    info.innerText = isInArray ? '' : `${operator.value} utilise la concaténation.`;
};

calculateBtn.onclick = (e) => {
    e.preventDefault();
    const firstValue = Number(document.getElementById('valeur1').value);
    const secondValue = Number(document.getElementById('valeur2').value);
    const operatorValue = document.getElementById('operateur').value;
    const solution = document.getElementById('solution');

    const results = operation(operatorValue)(firstValue, secondValue);

    solution.setAttribute('value', results);
};
