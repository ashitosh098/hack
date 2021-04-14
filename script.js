// Bootstrap html elements
const container = createBootstrap("div", "container box");
//youtube image
const image = createBootstrap("img","rounded mx-auto d-block");
image.setAttribute("src","youtube.jpg");
image.setAttribute("width","200px");
image.setAttribute("height","100px");

//search bar section
const searchRow = createBootstrap("div", "row");
const searchCol = createBootstrap("div", "col-md-12 mt-3");
const searchForm = createBootstrap(
  "form",
  "form-inline d-flex justify-content-center"
);
const inputSearchForm = createBootstrap("input", "form-control mr-sm-2");
inputSearchForm.setAttribute("type", "search");
inputSearchForm.placeholder = "Search ...";
inputSearchForm.style.width = "70%";
const buttonSearchForm = createBootstrap(
  "button",
  "btn btn-danger"
);
buttonSearchForm.setAttribute("type", "submit");
buttonSearchForm.innerText = "search";
// search append
searchForm.append(inputSearchForm, buttonSearchForm);
searchCol.append(searchForm);
searchRow.append(searchCol);
//card - section
const cardRow = createBootstrap("div", "row");
const cardCol = createBootstrap("div", "col-md-12 mt-3");
const cardDeck = createBootstrap("div", "card-deck");
const cardDeckTitleRow = createBootstrap("div", "row");
const cardDeckTitle = createBootstrap("div", "col-md-12 ml-3 my-3");
const cardDeckRow = createBootstrap("div", "row");
// card append
cardDeckTitleRow.append(cardDeckTitle);
cardDeck.append(cardDeckTitleRow, cardDeckRow);
cardCol.append(cardDeck);
cardRow.append(cardCol);
container.append( image,searchRow, cardRow);
// container append to the body
document.body.append(container);

// function to create bootstrap html elements
function createBootstrap(ele, className = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", className);
  return element;
}
//api url and key
const apikey="AIzaSyD44Rf5JlEmI-QOC8LX2KUqX1Fpmu0iViE";
const baseUrl="https://youtube.googleapis.com/youtube/v3/channels?";
