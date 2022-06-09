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

let editingItem = undefined;

function renderItem(text) {
	const newElement = itemTemplate.querySelector('.list__item').cloneNode(true);
	newElement.querySelector('.item__text').innerText = text;

	newElement.querySelector('.delete').addEventListener('click', () => {
		deleteItem(newElement);
	})

	newElement.querySelector('.duplicate').addEventListener('click', () => {
		renderItem(text);
	})

	newElement.querySelector('.edit').addEventListener('click', () => {
		editItem(newElement);
	})

	list.insertAdjacentElement('afterbegin', newElement);
}

function editItem(item) {
	editingItem = item;
	formInput.value = item.querySelector('.item__text').innerText;
	formButton.innerText = 'Изменить'
}

function deleteItem(item) {
	item.remove();
}

function createItem(e) {
	e.preventDefault();

	if (editingItem === undefined) {
		renderItem(formInput.value);
	} else {
		editingItem.querySelector('.item__text').innerText = formInput.value;
		formButton.innerText = 'Добавить'
		editingItem = undefined;
	}

	formInput.value = ''
}

form.addEventListener('submit', createItem)

items.forEach(renderItem);
