const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const headline = document.createElement("h3");
headline.style.color = "blue";
headline.textContent = "I'm a blue h3!";

const paragraph = document.createElement("p");
paragraph.style.cssText = "color: red";
paragraph.textContent = "Hey I'm red";

const multiple = document.createElement('div');
multiple.classList.add('multi');
multiple.style.cssText = "border: black solid 2px; background: pink;";

const bigHeadline = document.createElement("h1");
bigHeadline.textContent = "I'm in a div!";
const divParagraph = document.createElement("p");
divParagraph.textContent = "Me too";

multiple.appendChild(bigHeadline);
multiple.appendChild(divParagraph);

container.appendChild(headline);
container.appendChild(paragraph);
container.appendChild(content);
container.appendChild(multiple);

const btn = document.querySelector('#btn');
btn.addEventListener('dblclick', function (e) {
  e.target.style.background = 'blue';
});