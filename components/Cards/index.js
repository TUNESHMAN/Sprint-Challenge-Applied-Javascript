// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Article(headline, authorPhoto, authorName) {
  // CREATE HTML MARKUP
  const articleDiv = document.createElement("div");
  const articleDiv2 = document.createElement("div");
  const articleDiv3 = document.createElement("div");
  const articleDiv4 = document.createElement("div");
  const articleImage = document.createElement("img");
  const articleSpan = document.createElement("span");

  //   DEFINE HTML MARKUP
  articleDiv.append(articleDiv2);
  articleDiv.append(articleDiv2);
  articleDiv3.append(articleDiv4);
  articleDiv4.append(articleImage);
  articleDiv3.append(articleSpan);

//   ADD CLASSES
articleDiv.classList.add('card');
articleDiv2.classList.add('headline');
articleDiv3.classList.add('author');
articleDiv4.classList.add('img-container');

// ADD CONTENT
articleDiv2.textContent = obj.headline;
articleImage.src = obj.authorPhoto;
articleSpan.textContent = obj.authorName;



  return articleDiv;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((reply)=>{
    console.log(reply.data.articles);
    
    let cards = reply.data.articles;

    cards.forEach(element => {
        bodyText.append(element.headline)
    });
    

})
.catch()
