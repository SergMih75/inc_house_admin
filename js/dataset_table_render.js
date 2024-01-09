export function datasetRender(dataGet)  {
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
}