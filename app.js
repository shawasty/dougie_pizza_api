const BASE_URL = `http://data.cityofnewyork.us/resource/erm2-nwe9.json`;
// const API_KEY = `22v14bnl83f7hdp0irsa2s3w5`;
const agency = `?agency=NYPD`;
const bronx = `borough=BRONX`;
const manhattan = `borough=MANHATTAN`;
const brooklyn = `borough=BROOKLYN`;
const staten_Island = `borough=STATEN ISLAND`;
const queens = `borough=QUEENS`;

const brookBut = document.querySelector("#brooklyn");
const manhatBut = document.querySelector("#manhattan");
const bronxBut = document.querySelector("#bronx");
const queensBut = document.querySelector("#queens");
const statenBut = document.querySelector("#staten");

const searchInput = document.querySelector("#blank");
// const div = document.querySelector('.div');
const section = document.querySelector("section");

// https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS
function addInfo(idx) {
  const revealInfo = document.getElementById(`revealInfo${idx}`);

  if (revealInfo) {
    if (revealInfo.style.display === "none") {
      revealInfo.style.display = "block";
    } else {
      revealInfo.style.display = "none";
    }
  }
}
function outcome(arr) {
  // console.log(arr)
  section.innerHTML ='';   // clearing the old element before appending a new element
  for (let i = 0; i < arr.length; i++) {
    section.innerHTML += `<ul><li>${arr[i].complaint_type}</li></ul>`;
    section.innerHTML += `<button onclick="addInfo(${i})" id="moreinfo${i}">WHAT DID THE POLICE DO</button>`;
    section.innerHTML += `<span style= 'display: none'  id="revealInfo${i}">${arr[i].resolution_description}</span>`;

    // console.log(`<button onclick="addInfo(${i})" id="moreinfo${i}">WHAT DID THE POLICE DO</button>`)
  }

  // for (let i=0;i < arr.length; i++){
  //     section.innerHTML += `<table><tr><th>${arr[i].complaint_type}</th>
  //     </tr></table>`;
  //     // section.innerHTML += `<table><tr><td><button onclick="addedinfo()" id="moreinfo">WHAT DID THE POLICE DO</button></td></tr></table>`;
}

brookBut.addEventListener("click", async () => {
  let numInput = searchInput.value; // setting the # of complains to be entered
  if (numInput == "") {
    numInput = 10; //setting the default input if no number is entered
  }
  try {
    let response = await axios.get(
      `${BASE_URL}${agency}&${brooklyn}&$limit=${numInput}`
    );
    // console.log(response)
    let receivedinfo = response.data;
    console.log(receivedinfo);
    outcome(receivedinfo);
  } catch (err) {
    console.log(err);
  }
});

manhatBut.addEventListener("click", async () => {
  let numInput = searchInput.value;
  if (numInput == "") {
    numInput = 10;
  }
  try {
    let response = await axios.get(
      `${BASE_URL}${agency}&${manhattan}&$limit=${numInput}`
    );
    let receivedinfo = response.data;
    console.log(receivedinfo);
    outcome(receivedinfo);
  } catch (err) {
    console.log(err);
  }
});

bronxBut.addEventListener("click", async () => {
  let numInput = searchInput.value;
  if (numInput == "") {
    numInput = 10;
  }
  try {
    let response = await axios.get(
      `${BASE_URL}${agency}&${bronx}&$limit=${numInput}`
    );
    let receivedinfo = response.data;
    console.log(receivedinfo);
    outcome(receivedinfo);
  } catch (err) {
    console.log(err);
  }
});

queensBut.addEventListener("click", async () => {
  let numInput = searchInput.value; // setting the # of complains to be entered
  if (numInput == "") {
    numInput = 10; //setting the default input if no number is entered
  }
  try {
    let response = await axios.get(
      `${BASE_URL}${agency}&${queens}&$limit=${numInput}`
    );
    let receivedinfo = response.data;
    console.log(receivedinfo);
    outcome(receivedinfo);
  } catch (err) {
    console.log(err);
  }
});

statenBut.addEventListener("click", async () => {
  let numInput = searchInput.value;
  if (numInput == "") {
    numInput = 10;
  }
  try {
    let response = await axios.get(
      `${BASE_URL}${agency}&${staten_Island}&$limit=${numInput}`
    );
    let receivedinfo = response.data;
    console.log(receivedinfo);
  } catch (err) {
    console.log(err);
    outcome(receivedinfo);
  }
});
