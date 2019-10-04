// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  //   console.log(res.data.articles);
  const cards = Object.values(res.data.articles);
  const cardsContainer = document.querySelector(".cards-container");
  cards.forEach(item1 => {
    item1.forEach(item2 => {
      cardsContainer.appendChild(articleCreator(item2));
    });
  });
});

function articleCreator(data) {
  const card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    image = document.createElement("img"),
    authorName = document.createElement("span");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = data.headline;
  author.textContent = data.authorName;
  image.src = data.authorPhoto;
  authorName.textContent = `By ${data.authorName}`;
  return card;
}
