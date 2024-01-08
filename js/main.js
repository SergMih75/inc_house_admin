const navBtn = document.querySelectorAll('.nav__btn')
const popup = document.querySelector('.popup')
const addBtn = document.querySelector('.add__btn')
const dataAdd = document.querySelectorAll('.data-add')
const baseUrl =
	'https://658de3287c48dce94739cf8b.mockapi.io/sergmih75/ink_house'
let temp
document.addEventListener('DOMContentLoaded',()=>{
    getQuestion()
})
navBtn.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		popup.classList.add('popup-active')
		if (item.classList.contains('nav__btn-add')) {
			document.querySelector('.popup__add').classList.add('popup__add-active')
		}
		if (item.classList.contains('nav__btn-del')) {
			document.querySelector('.popup__del').classList.add('popup__del-active')
		}
	})
})

popup.addEventListener('click', e => {
	if (
		e.target.classList.contains('add__close') ||
		e.target.classList.contains('del__close')
	) {
		document.querySelector('.popup__add').classList.remove('popup__add-active')
		document.querySelector('.popup__del').classList.remove('popup__del-active')
		popup.classList.remove('popup-active')
	}
})


addBtn.addEventListener('click', function(){
    getQuestion()
    newItem = {
        id: temp.length + 1,
        pic_author: document.getElementById('author-add').value,
        pic_tile: document.getElementById('title-add').value,
        pic_description: document.getElementById('description-add').value,
        pic_path: document.getElementById('path-add').value,
        pic_price: document.getElementById('price-add').value,
        pic_quantity: document.getElementById('quantity-add').value,
        pic_code: document.getElementById('code-add').value,
    }

        console.log('newItem: ', newItem);
})

function getQuestion() {
    fetch(baseUrl, {
	method: 'GET',
	headers: { 'content-type': 'application/json' },
})
	.then(response => response.json())
	.then(dataGet =>processingGetResponse(dataGet))
	.catch(error => console.error(error))
}

function processingGetResponse(dataGet) {
	temp = dataGet
	console.log('temp: ', temp)
	temp.forEach(item => {
		console.log(item.pic_author)
	})
	console.log(temp.length)
}

function postQuestions(newItem) {
    fetch(baseUrl, {
	method: 'POST',
    body: JSON.stringify(newItem),
	headers: { 'content-type': 'application/json' },
})
}