// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KittyCoder', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/hello-kitty/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Kitty\'s Code Creations',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['KittyCoder/litterbox-cleanup', 'KittyCoder/catnip-debugger'],
        },
      },
      manual: {
        projects: ['KittyCoder/mouseTracker', 'KittyCoder/fishFinder'],
      },
    },
    external: {
      header: 'Purr-fect Projects',
      projects: [
        {
          title: 'Mice Catcher 3000',
          description:
            'A sophisticated machine learning model designed to predict and track the fastest route to catch a scampering mouse.',
          imageUrl:
            'https://img.freepik.com/free-vector/cute-cat-playing-with-ball-yarn_43633-2082.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Ultimate Catnip Dispenser',
          description:
            'An IoT device that dispenses catnip based on feline mood detection via integrated cameras and sensors.',
          imageUrl:
            'https://img.freepik.com/free-vector/cat-playing-with-a-ball-of-wool_23-2147504584.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hello Kitty - Savvy Kitty Coder',
    description: 'Watch out world, this kitty\'s got claws and code!',
    imageURL: 'https://img.freepik.com/free-vector/cute-astronaut-cat-cartoon-vector-icon-illustration-animal-science-icon-concept-isolated_138676-2178.jpg',
  },
  social: {
    linkedin: 'hello-kitty',
    twitter: 'kitty_dev',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'instacat',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: 'https://www.hellokitty.com',
    phone: '',
    email: 'hello@kitty.com',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'Catching Mice',
    'Sleeping 18 Hours',
    'Purr-gramming in MeowScript',
    'Laser Pointer Tracking',
    'Nap.js',
    'Hairball Development',
    'Whisker Containerization',
  ],
  experiences: [
    {
      company: 'Catnip Industries',
      position: 'Senior Purrgrammer',
      from: 'June 2020',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Meow Mix Solutions',
      position: 'Junior Mouser',
      from: 'July 2018',
      to: 'May 2020',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Certified Laser Pointer Specialist',
      body: 'Cat Academy',
      year: 'March 2019',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University of Catifornia',
      degree: 'Bachelor of Science in Computer Meownce',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Advanced Techniques in Bird Watching',
      journalName: 'Journal of Feline Leisure Studies',
      authors: 'Hello Kitty, Chococat',
      link: 'https://example.com',
      description:
        'An in-depth analysis of window-side bird watching and its impact on feline cognitive development.',
    },
    {
  title: 'Unraveling the Mystery of Infinite Loops: A Cat\'s Perspective',
  journalName: 'Feline Computer Theory Quarterly',
  authors: 'Hello Kitty, Badtz-Maru',
  link: 'https://example.com',
  description:
    'This groundbreaking study investigates how cats perceive infinite loops, comparing them to the never-ending task of chasing one\'s own tail. Insights include both theoretical models and practical experiments involving laser pointers and automated cat wheels.',
},
{
  title: 'The Effectiveness of Cat-Paws Typing Technique in Speed Coding',
  journalName: 'Journal of Innovative Computing Methods',
  authors: 'Hello Kitty, Keroppi',
  link: 'https://example.com',
  description:
    'Exploring the revolutionary "Cat-Paws Typing" method, this paper presents a humorous yet surprisingly effective approach to enhance typing speed and accuracy. The study measures performance enhancements in real-world coding sprints, with a focus on fluffy keyboard adaptations.'
}
  ],
  blog: {
    source: 'dev',
    username: 'kittyDev',
    limit: 2,
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
