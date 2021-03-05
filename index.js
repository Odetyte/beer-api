const urlBase = "https://api.punkapi.com/v2/beers"

// Create an async function called "getBeers"

async function getBeers() {
  const beerPromise = await fetch(urlBase)

  const beerData = await beerPromise.json()
  console.log(beerData)
  //render data
  const beers = document.querySelector('.beers')
  let beerHtml = ""

  beerData.forEach(beer => {
    beerHtml += `
      <div class='beer-wrapper card'>
        <div class='beer'>
          <img class='beer__img' src="${beer.image_url}">
            <h3>${beer.name}</h3>
              <span class='beer__info'>
                <span>ABV: ${beer.abv}%</span>
                <span>IBU: ${beer.ibu}</span>
              </span>
            </div>
        </div>
        `;
  })
  beers.innerHTML = beerHtml
}


getBeers()