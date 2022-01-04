// DB for hold the post
let postDb = [];

// get the btn for crate post
let btn = document.querySelector("#create");

// get the inputs for post value
let postTitle = document.querySelector("#title");
let postAuthor = document.querySelector("#author");
let postContent = document.querySelector("#content");

// get posts container for add msg thete post is created
let container = document.querySelector(".container");
// var for post number
let count = 0;

const URL = "http://localhost:3001";

// create post on server

async function createPostOnServer(title, body, author) {
  let res = await fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      author,
    }),
  });
  return await res.json();
}

// function for create post
async function createPost(title, author, content) {
  let newPost = {
    title: title,
    body: content,
    author: author,
    date: new Date().toLocaleDateString(),
    postNumber: (count += 1),
  };
  await createPostOnServer(newPost.title, newPost.body, newPost.author);
  postDb.push(newPost);
}
// add secuss msg to user
let msg = document.createElement("p");

// clean input
function cleanVal() {
  postTitle.value = "";
  postAuthor.value = "";
  postContent.value = "";
  msg.textContent = "your new post was created";
  msg.classList.add("msg");
  container.appendChild(msg);
}

// clean msg after show
function cleanMsg() {
  setTimeout(() => {
    container.removeChild(msg);
  }, 2000);
}
// add event
btn.addEventListener("click", () => {
  createPost(postTitle.value, postAuthor.value, postContent.value);

  cleanVal();
  cleanMsg();
});

console.log(postDb);

// show POSTS
let showContainer = document.querySelector(".showPost");
let showBtn = document.querySelector("#show");

function showPost() {
  let singlePost = document.createElement("div");
  console.log(postDb);
  postDb.forEach(p => {
    singlePost.innerHTML += `<h3>${p.title}</h3> <p>${p.body}</p> <p>${p.date}</p> <h6> created by : ${p.author}</h6>`;
  });
  showContainer.appendChild(singlePost);
}

showBtn.addEventListener("click", showPost);

// craet toe var thet hold the value date.get.second and get hoer

// get watch element
let clock = document.querySelector("#clock");

function setHoer() {
  let d = new Date();
  let H = d.getHours();
  let M = d.getMinutes();
  let S = d.getSeconds();

  let clockTime = `${H} : ${M} : ${S}`;
  clock.innerHTML = clockTime;
}
setInterval(setHoer, 1000);
