const bookList = document.querySelector('.books-list');
const form = document.querySelector('.filters');
const filters = [];

const renderList = function (){
  const source = document.querySelector('#template-book').innerHTML;
  const generatedHTML = Handlebars.compile(source);

  for (const paramId in dataSource.books){
    const item = utils.createDOMFromHTML(generatedHTML(dataSource.books[paramId]));
    bookList.appendChild(item);
    const rating = item.querySelector('.book__rating__fill');

    if (dataSource.books[paramId].rating < 6 ){
      rating.style.background = 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)';
    } else if(dataSource.books[paramId].rating > 6 && dataSource.books[paramId].rating <= 8){
      rating.style.background = 'linear-gradient(to bottom, #b4df5b 0%, #b4df5b 100%)';
    }else if(dataSource.books[paramId].rating > 8 && dataSource.books[paramId].rating <= 9){
      rating.style.background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
    } else  {
      rating.style.background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
    }
  }
};

const initActions = function() {
  const favoriteBooks = [];

  bookList.addEventListener('dblclick', (e) => {
    e.preventDefault();

    const dataId = e.target.parentElement.parentElement.dataset.id;

    if (e.target.parentElement.parentElement.classList.contains('favorite')) {
      e.target.parentElement.parentElement.classList.remove('favorite');
      favoriteBooks.splice(favoriteBooks.indexOf(dataId), 1);

    } else {
      e.target.parentElement.parentElement.classList.add('favorite');
      favoriteBooks.push(dataId);
    }
  });

  form.addEventListener('click', (e) => {

    if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox' && e.target.name == 'filter') {

      if (e.target.checked) {
        filters.push(e.target.value);

      } else {
        filters.splice(filters.indexOf(e.target.value), 1);
      }

    }
    showFilterBooks();
  });
};


const showFilterBooks = function(){
  for (let book of dataSource.books){
    let shouldBeHidden = false;

    for (let tag of filters) {
      if (!book.details[tag]){
        shouldBeHidden = true;
        break;
      }
    }
    if (shouldBeHidden) {
      console.log(book.id);
      bookList.querySelector(`a[data-id="${book.id}"]`).classList.add('hidden');
    } else {
      bookList.querySelector(`a[data-id="${book.id}"]`).classList.remove('hidden');
    }
  }
};


renderList();
initActions();