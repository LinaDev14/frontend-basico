/*
La Fetch API es una interfaz moderna de JavaScript para realizar solicitudes HTTP (peticiones) 
de manera asíncrona. Proporciona una forma más potente y flexible de trabajar con redes y 
recursos remotos en comparación con las técnicas tradicionales como XMLHttpRequest (XHR). 
La Fetch API utiliza promesas para manejar respuestas, 
lo que la hace más intuitiva y fácil de usar. 

*/

// promesas

fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Productos obtenidos:', data);
    // Aquí puedes realizar cualquier acción con los datos, como mostrarlos en una página web
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// con async await

async function obtenerProductos() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Productos obtenidos:', data);
      // Aquí puedes realizar cualquier acción con los datos, como mostrarlos en una página web
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  obtenerProductos();