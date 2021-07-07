// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // CREATE HTML MARKUP
  const headerDiv = document.createElement("div");
  const headerSpan = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const secondSpan = document.createElement("span");

  // DEFINE HTML MARKUP
  headerDiv.append(headerSpan);
  headerDiv.append(headerTitle);
  headerDiv.append(secondSpan);

  // CREATE CLASSES
  headerDiv.classList.add("header");
  headerSpan.classList.add("date");
  secondSpan.classList.add("temp");

//   ADD CONTENT
headerSpan.textContent = `MARCH 28, 2019`;
headerTitle.textContent = `Lambda Times`;
secondSpan.textContent = `98°`;

  return headerDiv;
}

// ADD TO THE DOM
const bodyText = document.querySelector('.header-container');
bodyText.append(Header());
