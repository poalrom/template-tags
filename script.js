const items = [
	"<script>alert(1)</script>",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const form = document.querySelector('.form');
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

function renderItem(text) {
	const newElement = itemTemplate.querySelector('.list__item').cloneNode(true);
	newElement.querySelector('.item__text').innerText = text;

	newElement.querySelector('.delete').addEventListener('click', () => {
		deleteItem(newElement);
	})

	list.insertAdjacentElement('afterbegin', newElement);
}

function deleteItem(item) {
	item.remove();
}

function createItem(e) {
	e.preventDefault();
	renderItem(formInput.value);
	formInput.value = ''
}

form.addEventListener('submit', createItem)

items.forEach(renderItem);
