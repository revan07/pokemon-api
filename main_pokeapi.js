var post = document.getElementById('post').addEventListener('click', data)



function data() {
    const name = document.getElementById('fetch').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((data) => {

            document.getElementById('boxContent').innerHTML = `
           
           <div>
           <p>ID</p><br> 
           <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}">

           </div>

           `
            console.log(data)
        })

};
