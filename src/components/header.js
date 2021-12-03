import axios from 'axios';
const Header = (title, date, temp) => {
  
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  headerDiv.appendChild(dateSpan);
  dateSpan.classList.add("date");
  dateSpan.textContent = `${date}`;

  const titleHeader = document.createElement("h1");
  headerDiv.appendChild(titleHeader);
  titleHeader.textContent = `${title}`;

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = `${temp}`;
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerAppender = (selector) => {
  const recepticle = document.querySelector(`${selector}`);
  const newHeader = Header("I Am Very Smart", "09/15", "75");
  recepticle.appendChild(newHeader);
}

export { Header, headerAppender }
