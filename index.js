let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent
}

document.querySelector('.ac').onclic = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	//no press btn
	if (!event.target.classList.contains('btn')) return;
	//press ac
	if (event.target.classList.contains('ac')) return;
	out.textContent = '';

	const key = event.target.textContent;

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			out.textContent = a;
		}
		else if (a!=='' && b!=='' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		}
		else {
			b += key;
			out.textContent = b;
		}
		console.table (a, b, sign);
		return;
	}
	//если нажата клавиша + - * /
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.table (a, b, sign);
		return;
	}
	//если нажата клавиша =
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case "+":
				a =(+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "x":
				a = a * b;
				break;
			case "/":
				if (b === '0') {
					out.textContent = 'Ошибка';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.log(a, b, sign);
	}
}

