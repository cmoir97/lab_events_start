document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})



 handleFormSubmit = function (event) {
  event.preventDefault();
  const resultFormSubmit = document.querySelector('#reading-list');

const newBookList = document.createElement("ul");
resultFormSubmit.appendChild(newBookList);

const newBookTitle = document.createElement("li");
newBookTitle.textContent = event.target.title.value;
newBookList.appendChild(newBookTitle);

const newBookAuthor = document.createElement("li");
newBookAuthor.textContent = event.target.author.value;
newBookList.appendChild(newBookAuthor);

const newBookCategory = document.createElement("li");
newBookCategory.textContent = event.target.category.value;
newBookList.appendChild(newBookCategory);



// const newBookAuthor = document.querySelector("li");
// newBookAuthor.textContent = `Author: ${event.target.author.value}`
// newBookList.appendChild(newBookAuthor);
//
// const newBookCategory = document.querySelector("li")
// newBookCategory.textContent = `Category: ${event.target.author.value}`
// newBookList.appendChild(newBookCategory);

};
