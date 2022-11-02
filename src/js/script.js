


const renderList = function (){
  const bookList = document.querySelector('.books-list');
  const source = document.querySelector('#template-book').innerHTML;
  const generatedHTML = Handlebars.compile(source);

  for (const paramId in dataSource.books){
    const item = utils.createDOMFromHTML(generatedHTML(dataSource.books[paramId]));
    bookList.appendChild(item);
  }
};

const initActions = function(){
  const bookList = document.querySelector('.books-list');
  const favoriteBooks = [];


  bookList.addEventListener('dblclick', (e) => {
    e.preventDefault();

    const dataId = e.target.parentElement.parentElement.dataset.id;

    if (e.target.parentElement.parentElement.classList.contains('favorite')){
      e.target.parentElement.parentElement.classList.remove('favorite');
      favoriteBooks.splice(favoriteBooks.indexOf(dataId), 1);

    } else {
      e.target.parentElement.parentElement.classList.add('favorite');
      favoriteBooks.push(dataId);
    }
  });


};
renderList();
initActions();

