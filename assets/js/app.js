const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

async function displayUser(username) {
  $name.textContent = 'cargando...';
  $blog.textContent = 'cargando...';
  $location.textContent = 'cargando...';


  try {

    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $name.textContent = data.name;
    $blog.textContent = data.blog;
    $location.textContent = data.location;

  } catch (err) {
    console.log('OH NO!');
    console.log(err);
    $name.textContent = `Algo salió mal: ${err}`
  }

}


displayUser('stolinski');