const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // puse el punto para que se leyeran como clases y cambie los nombres de las variables para que fueran más entendibles
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

async function displayUser(username) {// agregué el async para que pudiera usarse con el await
  $name.textContent = 'cargando...';//hice un cargando ... para cada dato por si tarda cualquieras de estos
  $blog.textContent = 'cargando...';
  $location.textContent = 'cargando...';


  try { // hice uso del try catch para manejar los errores

    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $name.textContent = data.name; // no era necesario un  template literals
    $blog.textContent = data.blog;
    $location.textContent = data.location;

  } catch (err) {
    console.log('OH NO!');
    console.log(err);
    $name.textContent = `Algo salió mal: ${err}`
  }

}


displayUser('stolinski');// al usar el try catcj ya no era necesario llamar a la función del error