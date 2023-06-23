import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Abdirahim',
  subtitle: 'I am software developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  // img: '',
  paragraphOne:
    'Highly motivated, detail-oriented software Developer with good technical skills working with C, HTML5,CSS/SAAS,JavaScript and React libraries. Very adapted at both independent and collaborative projects.',
  paragraphTwo: 'My goal is to craft visually appealing user-friendly websites.',
  paragraphThree:
    'My experties lies in translating designs into fully functional websites, while utilizing my development skills to enhance and customize their features',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Rahim entertainment-img.png',
    title: 'Rahim Entertainment',
    info: 'HTML,CSS3,Javascript and React',
    info2:
      'This website enables the user to filter between movies,Tv shows and bookmarked contents.',
    url: 'https://rahim-entertainment.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Rahim-Entertainment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dictionary-img.png',
    title: 'Dirctionary app',
    info: 'HTML,CSS3,Javascript',
    info2:
      'This app is utilising an api which makes it able to search for user inputed words from Oxford dictionary',
    url: 'https://dictionar-app.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Dictionaryproject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Password-GEN-img.png',
    title: 'Password Generator App',
    info: 'HTML,Saas/CSS3,Javascript',
    info2:
      'This app generates passwords. The user is able to select the type of characters and the length of the password. Additionaly user can copy the generated password to clipboard',
    url: 'https://abdi-password-generator.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Password_Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tic-Tac-Toe_img.png',
    title: 'Password Generator App',
    info: 'HTML,Saas/CSS3,Javascript',
    info2: 'Simple popular game. The user is able to challenge a Computer or another player.  ',
    url: 'https://abdi-tic-tac-toe-game.netlify.app/',
    repo: 'https://github.com/abdirahimAli/Tic-tac-toe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'abdirahim08@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   // id: nanoid(),
    //   // name: 'twitter',
    //   // url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdirahim-ismail-7496a5202/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abdirahimAli',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
