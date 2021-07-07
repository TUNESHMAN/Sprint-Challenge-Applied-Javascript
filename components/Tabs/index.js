// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(arr) {
  // CREATE HTML MARKUP
  const tabTitle = document.createElement("div");

  // CREATE CLASSES
  tabTitle.classList.add(`tab`);

// ADD CONTENT
tabTitle.textContent = arr;

  return tabTitle;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);

    response.data.topics.forEach(element => {
      let majorTab = document.querySelector(".topics");
      majorTab.append(Tab(element));
    });
  })
  .catch();
