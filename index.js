const dog = document.querySelector('img#dog');
const main = document.querySelector('main');
const ui = document.querySelector('img#ui');
const overlay = document.querySelector('div#overlay');
const description = document.querySelector('p#description');
const repoSlots = document.querySelector('div#repos');

const pt_br = {
  headphones: 'Um headphone comum.',
  shirt: 'Uma camiseta comum.',
  pants: 'Uma calça comum.',
  body: 'Sou eu',
  dog: 'Tequila!',
  pt_br: '[Selecionado]',
  en: 'Change to English?',
};
const en = {
  headphones: 'Just a pair of headphones.',
  shirt: 'Just an ordinary shirt.',
  pants: 'Just an ordinary pair of pants.',
  body: "That's me",
  dog: 'Tequila!',
  pt_br: 'Mudar para português?',
  en: '[Selected]',
};
const setLanguage = (lg) => (lang = lg);
var lang = pt_br;

//set buttons for each repository
const loadRepos = async (cb) => {
  fetch(`https://api.github.com/users/nininhosam/repos`)
    .then((res) => res.json())
    .then((res) => {
      cb(res);
    });
};
const addReps = () => {
  repoList.forEach((repo) => {
    if (repo.name != 'Interactive-Room') {
      let htmlURL = `https://nininhosam.github.io/${repo.name}`;
      let repoURL = `https://github.com/nininhosam/${repo.name}`;
      let newRepo = document.createElement('a');
      newRepo.setAttribute('id', repo.name);
      newRepo.setAttribute('class', 'repo');
      newRepo.setAttribute('href', htmlURL);
      newRepo.setAttribute('target', '_blank');
      repoSlots.appendChild(newRepo);

      let repoText = document.createElement('p');
      repoText.setAttribute('id', `${repo.name}Text`);
      repoText.setAttribute('class', 'repoText');
      repoText.innerHTML = repo.name.replace('-', ' ');
      newRepo.appendChild(repoText);

      let gitBox = document.createElement('a');
      gitBox.setAttribute('id', 'gitBox');
      gitBox.setAttribute('href', repoURL);
      gitBox.setAttribute('target', '_blank');
      newRepo.appendChild(gitBox);
      let gitIcon = document.createElement('img');
      gitIcon.setAttribute('id', 'gitIcon');
      gitIcon.setAttribute('src', './assets/git_dark.png');
      gitBox.appendChild(gitIcon);

      //box shadow for pressed buttons
      newRepo.addEventListener('mousedown', () => {
        newRepo.style.boxShadow = 'inset 0.4vmin 0.6vmin 0 #000';
      });
      newRepo.addEventListener('mouseup', () => {
        newRepo.style.boxShadow = '0.4vmin 0.6vmin 0 #000';
      });
    }
  });
};
loadRepos((res) => {
  repoList = res;
  addReps();
});

//dog popup
function on() {
  overlay.style.display = 'block';
}
function off() {
  overlay.style.display = 'none';
  popup.remove();
  dogHead.remove();
}
dog.addEventListener('click', () => {
  const popup = document.createElement('img');
  popup.setAttribute('src', './assets/dog_bg.png');
  popup.setAttribute('id', 'popup');
  ui.before(popup);

  const dogHead = document.createElement('img');
  dogHead.setAttribute('src', './assets/dog.png');
  dogHead.setAttribute('id', 'dogHead');
  popup.before(dogHead);

  dogHead.addEventListener('click', () => {
    dogHead.setAttribute('src', './assets/dogPetFX.gif');
    setTimeout(() => {
      dogHead.setAttribute('src', './assets/dog.png');
    }, 3000);
  });
  on();
});

//description for hovered elements
document.querySelectorAll('.interactive').forEach((element) => {
  element.addEventListener('mousemove', () => {
    description.innerHTML = lang[element.id];
  });
  element.addEventListener('mouseout', () => {
    setTimeout(() => {
      description.innerHTML = '';
    }, 7000);
  });
});
