const tags = listTags(); // получение все html тегов для теста
const img = document.getElementById('img'); 
const q = document.querySelectorAll('.test-js-values');
const btnOk = document.querySelectorAll('.btn-next');
const page = document.querySelector('.page');
const testjs = document.querySelector('.test-js-container');
const windowTestComplit = document.querySelector('.test-complite');
const error = document.querySelector('.error');
console.log(q);
let obve;
let qMain // вороы все [[][][][][][]]
let ball = 0; // Балы
for (let obfTest of q) {
	qMain = obfTest;
	obve = obfTest.children;
}
console.log(obve); // [][][][][][]

/*init*/
let startCount = 0; //cчетчик запуска теста т е переход на новый лист тестов
const keyArrIndex = creatNumberArray(0, tags.length).shufle(); //генерация теста
let keyIndex = 0; //начать тест с 1 задания
test(keyIndex); //поехали
/*end init*/

function test(count) {
	if(tags.length <= startCount){return testComplite()}
	const rndArrIndex = keyArrIndex.shufle().slice(0, obve.length);
	console.log(keyArrIndex);
	console.log(rndArrIndex);
	keyIndex = keyArrIndex[count];
	console.log(keyIndex);
	for (let i = 0; i < rndArrIndex.length; i++) {
		if(!rndArrIndex.includes(keyIndex)) {
			console.log(findOnRandom(rndArrIndex, keyIndex));
		}
		let rndIndex = rndArrIndex[i];
		obve[i].innerHTML = tags[rndIndex].description;
		obve[i].dataset.id = rndIndex;
		page.innerHTML = `${startCount+1}/${keyArrIndex.length}`;

	}

	// Кастыль вставки картинок нужно с делать подругому
	if (document.documentElement.clientHeight < 700) {
		console.log('continu1');
		let arrPath = tags[keyIndex].img.split('/');
		arrPath.push('desktop');
		[arrPath[1],arrPath[2]] = [arrPath[2],arrPath[1]] 
		img.src = arrPath.join('/');
	} 
  else {
		img.src = tags[keyIndex].img;
		console.log(tags[keyIndex].img);
	}

}

//Функция завершения теста
function testComplite() {
	console.log('тест пройден');
	testjs.classList.add('dn');
	windowTestComplit.classList.remove('dn');
	document.write(`Тест Пройден Ураа: Количесво баллов ${ball} /100`)
}

// при клики на вопрос 
qMain.addEventListener('click', (e)=>{

	if(keyIndex === parseInt(e.target.dataset.id)){	
		ball += tags[startCount].ball; 	
		startCount++;
		console.warn(ball);
		test(startCount);
	} else {
		console.log('Неверно');
		startCount++;
		test(startCount);
		console.warn(ball);
	}
});

