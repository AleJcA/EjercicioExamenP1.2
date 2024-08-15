fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        let card = ``;

        data.forEach(usuario => {

            card += `
                        <div class="col-md-4 d-flex align-items-stretch mb-4">
                            <div class="card">
                                <img src="${usuario.image}" class="card-img-top" alt="${usuario.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${usuario.title}</h5>
                                    <p class="card-text descripcion">${usuario.description}</p>
                                    <p class="card-text"><strong>Categoria:</strong> ${usuario.category}</p>
                                    <p class="card-text"><strong>Precio:</strong> $${usuario.price}</p>
                                    <a href="#" class="btn btn-primary">Ver detalles</a>
                                </div>
                            </div>
                        </div>
                    `;
        });

        document.getElementById("tajertasInfo").innerHTML = card;
    })
    .catch(error => console.error('Error fetching data:', error));