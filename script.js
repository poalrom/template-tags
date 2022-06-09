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
