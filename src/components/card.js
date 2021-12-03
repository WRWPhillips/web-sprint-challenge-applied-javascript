import axios from 'axios';
const Card = (article) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const headLineDiv = document.createElement("div");
  cardDiv.appendChild(headLineDiv);
  headLineDiv.classList.add("headline");
  headLineDiv.textContent = `${article.headline}`;
  const authorDiv = document.createElement("div");
  cardDiv.appendChild(authorDiv);
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  authorDiv.appendChild(imgDiv);
  const authorImg = document.createElement("img");
  authorImg.src = `${article.authorPhoto}`;
  imgDiv.appendChild(authorImg);
  const creditSpan = document.createElement("span");
  creditSpan.textContent = `By ${article.authorName}`;
  authorDiv.appendChild(creditSpan);
  cardDiv.addEventListener('click', () =>{
    console.log(headLineDiv.textContent)
})
  return cardDiv;
}

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles').then(resp =>{
    for(let i = 0; i<Object.keys(resp.data.articles).length; i++){
      resp.data.articles[Object.keys(resp.data.articles)[i]].forEach(art =>{
        document.querySelector(selector).append(Card(art))
      })
    }
    console.log(resp)
  })
}

export { Card, cardAppender }
