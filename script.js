const logo = document.querySelector('.logo h1');
const form = document.querySelector('form');
const addPlayerBtn = document.querySelector('form button');
const randomizeBtn = document.querySelector('.randomize');
const input = document.querySelector('input');
const players = [];
const playersList = document.querySelector('.players ul');
const teamOneList = document.querySelector('.team-one-list');
const teamTwoList = document.querySelector('.team-two-list');

const setStyles = () => {
    randomizeBtn.style.width = `${logo.offsetWidth}px`;
    addPlayerBtn.style.width = `${form.offsetHeight}px`;
    form.style.width = `${logo.offsetWidth}px`;
};
setStyles();

const printPlayer = (player) => {
    const li = document.createElement('li');
    li.textContent = player;
    playersList.appendChild(li);
};
const printTeams = (player, team) => {
    const li = document.createElement('li');
    li.textContent = player;
    if (team === 1) {
        teamOneList.appendChild(li);
    } else {
        teamTwoList.appendChild(li);
    }
};
const clearPlayerList = () => {
    const lis = document.querySelectorAll('.players li');
    const ul = document.querySelector('.players ul');
    lis.forEach((li) => {
        ul.removeChild(li);
    });
};

const addPlayer = (e) => {
    e.preventDefault();
    const player = input.value;
    if (player === '') return;
    if (players.length === 10) return;
    if (player.length > 8) return;
    players.push(player);
    printPlayer(player);
    input.value = '';
};
const randomTeams = () => {
    teamOneList.innerHTML = '';
    teamTwoList.innerHTML = '';
    if (players.length < 2) return;
    let number = players.length * 2;
    for (let i = 0; i <= number - 1; i++) {
        const randomNumber = Math.floor(Math.random() * players.length);
        const player = players.splice(randomNumber, 1);
        const team = i % 2;
        number--;
        printTeams(player, team);
    }
    clearPlayerList();
};

addPlayerBtn.addEventListener('click', addPlayer);
randomizeBtn.addEventListener('click', randomTeams);

window.addEventListener('resize', () => {
    addPlayerBtn.style.width = `${form.offsetHeight}px`;
    setStyles();
});
