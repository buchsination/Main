import { projects } from "./projects.js";

let projectHTML = ``
generateSite();

function generateSite () {
  projects.forEach((element) => {
    projectHTML += `
    <div class="projekte">
    <div class="thumb">
      <div>
        <a href="${element.link}">
          <img class="${element.img.class}" src="${element.img.src}" alt="">
        </a>
      </div>
      <div>
        <a href="${element.code}" class="">
          Hier gehts zum Projekt
        </a>
      </div>
    </div>
  
    <div>
      <h1>${element.title}</h1>
      <p>${element.text}</p>
      <ul class="myList" id="${element.id}" data-list-id="${element.id}">
      
      </ul>
  
      <div class="code">
        <a href="${element.code}">
          Hier gehts zum Code
        </a>
      </div>
    </div>
  </div>
    `   
  });

  document.querySelector('.myProjects').innerHTML = projectHTML;

}

generateLists();

function generateLists () {
  document.querySelectorAll('.myList').forEach((point) => {
    let listId = point.getAttribute('data-list-id');
    projects.forEach((iteration) => {
      let data = iteration.list.slice();
      if (listId === iteration.id) {
        let list = document.getElementById(listId);
        let i = 0;
        for (i = 0; i < data.length; ++i) {
          let li = document.createElement('li');
          li.innerText = data[i];
          list.appendChild(li);
      }
      }
    })
  })
}