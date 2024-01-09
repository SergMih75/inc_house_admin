const baseUrl =
	'https://658de3287c48dce94739cf8b.mockapi.io/sergmih75/ink_house'
let temp

export function getQuestion() {
	fetch(baseUrl, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => response.json())
		.then(dataGet => {
	document.querySelector('.dataset__table').innerHTML=''

	let headRow = document.createElement('tr')
headRow.innerHTML = `
        <th>#</th>
		<th>Название</th>
		<th>Автор</th>
		<th>Описание</th>
		<th>Цена</th>
		<th>Остаток</th>
		<th>code</th>
		<th>Path</th>
    `
document.querySelector('.dataset__table').append(headRow)

dataGet.forEach(function (item) {
		let row = document.createElement('tr')
		row.innerHTML = `
        <td>${item.id}</td>
		<td>${item.pic_title}</td>
		<td>${item.pic_author}</td>
		<td>${item.pic_description}</td>
		<td>${item.pic_price}</td>
		<td>${item.pic_quantity}</td>
		<td>${item.pic_code}</td>
		<td>${item.pic_path}</td>
	`
		document.querySelector('.dataset__table').append(row)
	})
})
		.catch(error => console.error(error))
}

export function postQuestions(newItem) {
	fetch(baseUrl, {
		method: 'POST',
		body: JSON.stringify(newItem),
		headers: { 'content-type': 'application/json' },
	})
		.then(response => response.json())
		.catch(error => console.error(error))
}