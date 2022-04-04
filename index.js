const filterMenu = document.querySelector("#filters-menu");
const filterBtn = document.querySelector("#filter-btn");

const createNoteModal = document.querySelector("#create-note-modal");
const createNoteCloseBtn = document.querySelector("#create-note-close");
const createNoteShowBtn = document.querySelector("#create-note-show");

const labelModal = document.querySelector("#label-modal");
const labelModalCloseBtn = document.querySelector("#label-modal-close");
const labelModalShowBtn = document.querySelector("#label-modal-show");



filterBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
});

createNoteShowBtn.addEventListener("click", () => {
    createNoteModal.classList.add("active");
});

createNoteCloseBtn.addEventListener("click", () => {
    createNoteModal.classList.remove("active");
});

labelModalShowBtn.addEventListener("click", () => {
    labelModal.classList.add("active");
});

labelModalCloseBtn.addEventListener("click", () => {
    labelModal.classList.remove("active");
});
