const wall = document.getElementById('wall-of-gifs');

const w = wall.clientWidth;
const h = wall.clientHeight;

const cols = Math.round(w / 100);
const rows = Math.round(h / 100);

createGifs(cols * rows);

function createGifs(numberOfGifs, counter = 0) {
    if(counter < numberOfGifs) {
        fetch('https://api.giphy.com/v1/gifs/random?api_key=pr0gTMKHHuIrrWdYgP9TuBOXqJu9x5RV&tag=&rating=g')
        .then(resp => resp.json())
        .then(data => {
            const img = document.createElement('img');

            img.setAttribute('class', 'gif');
            img.setAttribute('id', `gif-no-${counter}`);
            img.setAttribute('src', data.data.fixed_width_small_url);
            wall.appendChild(img);

            counter++;
            createGifs(numberOfGifs, counter);
        })
        .catch(err => console.log(err));
    }
}