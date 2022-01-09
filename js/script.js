/*
Treehouse Techdegree: Data Pagination and Filtering
*/

/**
* `showPage` function
* @param {array} list - array of objects (student list)
* @param {number} page - current page number to determine the objects of the array to display
* displays 9 objects from an array of objects (students) in a grid
*/
function showPage(list, page) {
  // pagenumber times 9 (for nine items listed) - 9 equals the index of the first object to display
  const startIndex = page * 9 - 9;
  // pagenumber * 9 equals index of 9th (last) object to display
  const endIndex = page * 9;
  // ul for list items displaying the objects
  const studentList = document.querySelector(".student-list");
  // clears the ul from previously displayed list items
  studentList.innerHTML = "";

  // loops through the list items (objects)
  for (let i = 0; i < list.length; i++) {
    // tests if the list items are in the correct range according to the page number
    if(i >= startIndex && i < endIndex) {
      // creates the current list item as an html template literal
      const student = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Pcture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
        </li>`;
      // inserts the list item into the UL
      studentList.insertAdjacentHTML("beforeend", student);
    }
  }
}

/**
* `addPagination` function
* @param {array} list - List of objects, used to determine the buttons number and the range of objects to display
* creates the pagination buttons and adds an event listener to those buttons to display the according range of objects
*/
function addPagination(list) {
  // determins the number of buttons to be created (length of the list devided per 9, rounded result)
  const numButtons = Math.round(list.length / 9);
  // stores the UL that will contain the buttons
  const paginationList = document.querySelector(".link-list");
  // clears the UL of previously displayed buttons
  paginationList.innerHTML = "";

  // loops through the number of buttons to be
  for(let i = 1; i <= numButtons; i++) {
    // list item for each button
    const btn = `
    <li>
      <button type="button">${i}</button>
    </li>`
    // inserts the created li element with the button to the ul
    paginationList.insertAdjacentHTML("beforeend", btn);
  }

  // adds the class active to the first button inside the ul
  const firstBtn = paginationList.querySelector("button");
  firstBtn.classList.add("active");

  // page through the List
  paginationList.addEventListener("click", (e) => {
    if (e.target = "BUTTON") {
      const activeBtn = paginationList.querySelector(".active");
      activeBtn.classList.remove("active");
      const targetBtn = e.target;
      targetBtn.classList.add("active");
      showPage(list, e.target.textContent);
    }
  });
}

/**
* `createSearchBar` function
* creates and displays a searchbar (css provided)
*/
function createSearchBar() {
  const header = document.querySelector("header");
  const searchHTML = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
  `;
  header.insertAdjacentHTML("beforeend", searchHTML);
}

/**
* `filterNames` function
* @param {array} list - list of student objects to filter
* @param {element} input - search input field
* adds the search functionallity to the searchbar
*/
function filterNames(list) {
  const searchVal = document.getElementById("search").value;
  console.log(searchVal);
}



// Call the functions
createSearchBar();
showPage(data, 1);
addPagination(data);
