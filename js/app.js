document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  // const inputTitle = document.querySelector('#title');
  // inputTitle.addEventListener('input', handleInputTitle);
})



const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  // console.log('title', event.target.title.value)
  resultParagraph.textContent = ` Title: ${event.target.title.value}
  Author: ${event.target.author.value}
  Category: ${event.target.category.value}`;
};

// const handleInputTitle = function (event) {
//   const resultParagraph = document.querySelector('#input-result');
//   resultParagraph.textContent = event.target.value;
// }
