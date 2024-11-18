const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";

async function igmList() {
  try {
    let object = await fetch(url);
    let data = await object.json();
    const card = document.querySelector("[data-ul]");

    console.log(data);

    data.forEach((element) => {
      const content = ` <li class="card">
                              <img class="card__image" src="${element.url}" alt="imagen">
                              <h3 class="card__title">${element.title}</h3>
                        </li>
                       `;
      card.innerHTML += content;
    });
  } catch (error) {
          console.log(error);
  }
}

igmList();

// function igmList() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const card = document.querySelector("[data-ul]");

//       data.forEach((element) => {
//         const content = ` <li class="card">
//                               <img class="card__image" src="${element.url}" alt="imagen">
//                               <h3 class="card__title">${element.title}</h3>
//                           </li>
//                        `;
//         card.innerHTML += content;
//       });
//     })
//     .catch((error) => console.log(error));
// }

// igmList();
