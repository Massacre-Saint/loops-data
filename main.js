// const btt1 = document.getElementById("main-btn");
// btt1.innerHTML = "Click"
// const btt2 = document.querySelector('#main-btn');
// console.log(btt2);
const team = [
  {
    id: 1,
    name: "Dr. T",
    email: "drt@drt.com",
    favoriteColor: "red",
    image: "https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4"
  },
  {
    id: 2,
    name: "Aja",
    email: "drt@drt.com",
    favoriteColor: "RED",
    image: "https://avatars3.githubusercontent.com/u/57641436?s=400&u=1383b4d27114c6c7e3f05d55a4b4ac536971316a&v=4"
  },
  {
    id: 3,
    name: "Trinity",
    email: "drt@drt.com",
    favoriteColor: "blue",
    image: "https://avatars1.githubusercontent.com/u/31781724?s=460&u=10531433afe0ed55948173fab061a75fc3ffa8c1&v=4"
  },
];
const instructors = document.querySelector('#instructors');
let domString = '';
  for (const instructor of team) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${instructor.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${instructor.name}</p>
      <p class="card-text">${instructor.favoriteColor}</p>
      <p class="card-text">${instructor.email}</p>
    </div>
  </div>`
  };
instructors.innerHTML = domString;
