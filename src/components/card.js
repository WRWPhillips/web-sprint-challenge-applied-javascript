import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const headLineDive = document.createElement("div");
  cardDiv.appendChild(headLineDive);
  headLineDive.classList.add("date");
  headLineDive.textContent = `${article.headline}`;
  const authorDiv = document.createElement("div");
  cardDiv.appendChild(authorDiv);
  titleHeader.textContent = `${title}`;
  const tempSpan = document.appendChild("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = `${temp}`;
  return headerDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`
  ).then( resp => {
    console.log(resp.data);
    const getData = resp;
    const receiver = document.querySelector('.cards');
    receiver.appendChild(cardMaker(getData));
  }).catch(error =>{
    console.error(error);
  }).finally(() => console.log("working"));
  }
}

export { Card, cardAppender }
