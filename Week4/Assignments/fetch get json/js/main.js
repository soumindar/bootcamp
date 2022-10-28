const myList = document.querySelector("ul");

fetch('https://dummyjson.com/products/')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const products = data.products;
    console.log(products);
    const cards = showCards(products);
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = cards;
    
    const detailButtons = document.querySelectorAll('.modal-detail-button');
    detailButtons.forEach(function (btn) {
      btn.addEventListener('click', function() {
        const index = this.dataset.index;
        const product = products[index];
        const productDetails = showDetails(product);
        const modal = document.querySelector('.modal-content');
        modal.innerHTML = productDetails;
      });
    });
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
  });


const showCards = products => {
  let cards = '';
  products.forEach(product => {
    cards += `
      <div class="col-md-2 my-3">
        <div class="card">
          <img src="${product.thumbnail}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2">$${product.price} | rating: ${product.rating}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#productDetailModal" data-index="${Number(product.id)-1}">Product Details</a>
          </div>
        </div>
      </div>
    `;
  });
  return cards;
};


const showDetails = product => {
  const details = `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="productDetailModalLabel">${product.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div class="modal-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img src="${product.thumbnail}" class="img-fluid">
          </div>
          <div class="col-md">
            <ul class="list-group">
              <li class="list-group-item"><h4>${product.title} (${product.brand})</h4></li>
              <li class="list-group-item"><strong>Category: </strong>${product.category}</li>
              <li class="list-group-item"><strong>Price: </strong>$${product.price}</li>
              <li class="list-group-item"><strong>Rating: </strong>${product.rating}</li>
              <li class="list-group-item"><strong>Stock: </strong>${product.stock}</li>
              <li class="list-group-item"><strong>Description: </strong><br>${product.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  `;
  return details;
};