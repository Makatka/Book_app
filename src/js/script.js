
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


};
renderList();
initActions();