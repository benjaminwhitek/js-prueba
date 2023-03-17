const ul = document.querySelector('.products')

async function getUseData(){
    try {
        const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json() 
    console.log (data)
    render (data)
        
    } catch (error) {
        console.log(error.message)
        
    }
    
}


ul.addEventListener('click', clickHandler)

function clickHandler(click) {
    click.preventDefault()
    const evento_click = click.target.closest('.product__like') 
    if (evento_click) {
        pintar(evento_click)
        
    }
}


function pintar(evento) {
    const icono = evento.firstElementChild

    if(icono.className ===  "icon-heart-empty") {
        icono.className = "icon-heart";
    } else {
        icono.className = "icon-heart-empty";
    }
}



function render (products) {
    let html = ''
    for (const product of products) {
        html += `<li class="product">
        <div class="product__image-container">
          <img src="${product.image}" alt="${product.title}" class="product__image" />
        </div>
        <div class="product__content">
          <header class="product__header">
            <h6 class="product__category">${product.category}</h6>
            <h2 class="product__title">${product.title}</h2>
            <p class="product__price">${product.price}</p>
            <p class="product__description">${product.description}</p>
          </header>
          <footer class="product__footer">
            <a href="#" data-id="${product.id}" class="product__like"><i class="icon-heart-empty"></i></a>
            <a href="#" class="product__add-to-cart">Add to Cart</a>
          </footer>
        </div>
      </li>`
        
    }
   
    ul.innerHTML = html
}
getUseData()