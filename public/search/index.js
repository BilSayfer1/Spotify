const home_main = document.getElementById('home_main');

if (home_main) {
    home_main.onclick = () => {
        window.location.href = '/diplomka/';
    };
}
let scrollAmount = 0;
const sliderContainer = document.querySelector('.playlist-grid');
const playlistWidth = 300 + 10;
const playlistsToShow = 3;

const next_genre = document.getElementById('next-genre')
next_genre.onclick = () => {
    scrollRight();
};

const prev_genre = document.getElementById('prev-genre')
prev_genre.onclick =  () => {
    scrollLeft();
};

function scrollRight() {
    const maxScroll = -(playlistWidth * (sliderContainer.children.length - playlistsToShow));
    if (scrollAmount > maxScroll) {
        scrollAmount -= playlistWidth * playlistsToShow;
        if (scrollAmount < maxScroll) scrollAmount = maxScroll;
    }
    sliderContainer.style.transform = `translateX(${scrollAmount}px)`;
}

function scrollLeft() {
    if (scrollAmount < 0) {
        scrollAmount += playlistWidth * playlistsToShow;
        if (scrollAmount > 0) scrollAmount = 0;
    }
    sliderContainer.style.transform = `translateX(${scrollAmount}px)`;
}

const account = document.getElementById('account');
const dropdownMenu = document.getElementById('dropdown-menu');

account.onclick = () => {
    if (dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
    } else {
        dropdownMenu.classList.add('open');
    }
};

const left = document.getElementById('left')

left.onclick = () => {
    window.location.href = '/diplomka/';
}
