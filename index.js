let personal = [
	{
		name: 'Kate',
		age: 23,
		occupation: 'manager'
	},
	{
		name: 'Vlad',
		age: 28,
		occupation: 'project manager'
	},
	{
		name: 'Olha',
		age: 40,
		occupation: 'project manager'
	},
	{
		name: 'Andrew',
		age: 36,
		occupation: 'director'
	},
	{
		name: 'Misha',
		age: 48,
		occupation: 'Frontend Developer'
	},
	{
		name: 'Sasha',
		age: 32,
		occupation: 'Backend Developer'
	},
	{
		name: 'Serhio',
		age: 24,
		occupation: 'manager'
	},
	{
		name: 'Liza',
		age: 23,
		occupation: 'frontend developer'
	}
];

// В залежності від посади назначити співробітникам хобі:
// Якщо в посаді є manager, то встановити хобі - football
// Якщо в посаді є director, то встановити хобі - tennis
// Якщо в посаді є developer, то встановити хобі - chess

// При натисканні на відповідні кнопки в розмітці виводити список співробітників, відсортованих по хобі


personal.forEach(obj => {
	if(obj.occupation.toLowerCase().includes('manager')) {
		obj.hobby = 'football';
	} else if(obj.occupation.toLowerCase().includes('director')) {
		obj.hobby = 'tennis';
	} else if(obj.occupation.toLowerCase().includes('developer')) {		
		obj.hobby = 'chess';
	}
})



let $list = document.querySelector('.js-personal-list');

function showHobby(hobby) {
	let arr = personal.filter(item => item.hobby === hobby)
	$list.innerHTML = "";
	arr.forEach(item => {
		let $li = document.createElement('li');
		$li.innerText = `${item.name}, ${item.age}`
		$list.appendChild($li);
	})

	// let mod = null;
	// if(hobby === 'tennis') {
	// 	mod = document.querySelector('.js-show-tennis');
	// } else if (hobby === 'football') {
	// 	mod = document.querySelector('.js-show-football');
	// } else if (hobby === 'chess') {
	// 	mod = document.querySelector('.js-show-chess');
	// }
	// changeModificator(mod);

	changeModificator(document.querySelector(`.js-show-${hobby}`));
}

function showAll() {
	$list.innerHTML = "";
	personal.forEach(item => {
		let $li = document.createElement('li');
		$li.innerText = `${item.name}, ${item.age}`
		$list.appendChild($li);
	})
	changeModificator(document.querySelector('.js-show-all'));
}

function changeModificator(btn) {
	let $btns = document.querySelectorAll('.js-btn');
	$btns.forEach(item => {
		item.classList.remove('btn-list__item--active');
	});
	btn.classList.add('btn-list__item--active');
}

showAll();

document.querySelector('.js-show-tennis').addEventListener('click', () => showHobby('tennis'));
document.querySelector('.js-show-football').addEventListener('click', () => showHobby('football'));
document.querySelector('.js-show-chess').addEventListener('click', () => showHobby('chess'));
document.querySelector('.js-show-all').addEventListener('click', showAll);