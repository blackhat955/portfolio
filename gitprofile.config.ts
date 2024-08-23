// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'blackhat955', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },

    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Searching Bot',
          description: 'Help to find the most sophisticated search results and hence reduce user query time. This bot provokes Discord users to engage maximum in chatting and provides different perks based on their chatting time to buy premium memberships and other goodies.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg5R79jMmbs7jXgnzTWeuXFux5V_6yknFHQ&s',
          link: 'https://github.com/blackhat955/Leveling-Up-Bot',
        },
        {
          title: 'Weather Report',
          description: 'Our app provides real-time weather reports for any location by entering the zip code. You can easily access information about the current temperature, weather conditions, wind speed, and humidity at your desired location.',
          imageUrl: 'https://img.freepik.com/premium-vector/weather-report-concept-background-flat-icons_51635-2286.jpg',
          link: 'https://github.com/blackhat955/wather_app',
        },
        {
          title: 'SWM-SYSTEM',
          description: 'A garbage management project designed to streamline waste collection through AI and cloud technology. The system predicts bin overflow and calculates the most efficient waste collection routes, saving time, fuel, and resources. Includes a React PWA and Node.js backend for user access and management.',
          imageUrl: 'https://media.licdn.com/dms/image/D5612AQEwsUIcCvj2aw/article-cover_image-shrink_600_2000/0/1720426067104?e=2147483647&v=beta&t=yPnEFlVsoEhgikGte1S_N-UpeBsysr4yE4gMF2kMWjU',
          link: 'https://github.com/blackhat955/SWM-FrontEnd',
        },
        {
          title: 'API for User Authentication',
          description: 'Provides user authentication and authorization capabilities for websites. This API helps developers secure their sites easily and can be customized to meet specific needs. Available for installation via NPM.',
          imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:841/1*yCpUC4xPxtYV-LKbUv_TmQ.jpeg',
          link: 'https://github.com/blackhat955/Multiuserauthenticator',
        },
        {
          title: 'E-commerce Website',
          description: 'Developed as part of an internship assignment, this website aims to assist micro businesses in e-retail and commerce. Built using HTML, CSS, and vanilla JavaScript, it features user-friendly design and SEO optimization.',
          imageUrl: 'https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bdc2fa7b9ffc2aadb9e372_6488965e56c8df016b016cc7_virtual-item-selection.webp',
          link: 'https://github.com/blackhat955/E-commerce-Clothes',
        },
      ],
    },    
  },
  seo: {
    title: 'Portfolio of Durgesh Tiwari',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'durgesh98',
    twitter: 'Durgesh77586',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '17112180/durgesh', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    leetcode:'https://leetcode.com/u/WhoDareToWin/',
    website: 'https://www.innovationwale.com/',
    phone: '',
    email: 'workwithdurgesh99@gmail.com',
  },
  resume: {
    fileUrl:
      '/Users/ironfeast/Library/Mobile Documents/com~apple~CloudDocs/SWE_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'JavaScript',
    'Python',
    'TypeScript',
    'Swift',
    'SQL',
    'HTML',
    'CSS',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'DynamoDB',
    'Node.js',
    'Express.js',
    'Jest',
    'NumPy',
    'Pandas',
    'scikit-learn',
    'React.js',
    'Bootstrap',
    'TensorFlow',
    'VS Code',
    'Firebase',
    'Heroku',
    'GitHub',
    'Git',
    'Agile',
    'Postman',
    'Android Studio',
    'Docker',
    'Jupyter Notebook',
    'Jira',
],

experiences: [
  {
    company: 'Programmers Army',
    position: 'Software Engineer',
    from: 'October 2022',
    to: 'June 2023',
    companyLink: 'https://www.programmersarmy.com',
  },
  {
    company: 'ByteLearn',
    position: 'Software Engineer Intern',
    from: 'June 2022',
    to: 'September 2022',
    companyLink: 'https://www.bytelearn.com',
  },
],

certifications: [
  {
    name: 'ACM ICPC Regionalist',
    body: 'ICPC - International Collegiate Programming Contest',
    year: 'October 2021',
    link: 'https://drive.google.com/file/d/1BvuCjr1f7UXM_sxf0fBh11R88ZY2r0Y3/view',
  },
  {
    name: 'Manipulating Time Series Data in R',
    body: 'DataCamp',
    year: 'January 2024',
    link: 'https://www.datacamp.com/statement-of-accomplishment/course/8d961a0161257b6b8822d2841ac9142e5ed4b92b?raw=1',
  },
  
  {
    name: 'MySQL 5.6 Developer',
    body: 'HackerRank',
    year: 'February 2022',
    link: 'https://www.hackerrank.com/certificates/6fa76efb58e8',
  },
  {
    name: 'Introduction to Scripting in Python Specialization',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2SAMP46WQN52',
  },
  {
    name: 'Python Data Analysis',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/5Z9D3QS4257J',
  },
  {
    name: 'Python Data Visualization',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/5AU9LTUBGWA7',
  },
  {
    name: 'Computer Vision - Object Tracking with OpenCV and Python',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/UWLX3GA8GFUC',
  },
  {
    name: 'Python Data Representations',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/HZ8WT6L774LL',
  },
  {
    name: 'Python Programming Essentials',
    body: 'Coursera',
    year: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/JZB4L58JVD7K',
  },

  {
    name: 'Python',
    body: 'HackerRank',
    year: 'February 2020',
    link: 'https://www.hackerrank.com/certificates/5029c27fa241',
  },
],

  educations: [
    {
      institution: 'Indiana University Bloomington',
      degree: "Master's in Data Science",
      from: '2023',
      to: 'Expected May 2025',
    },
    {
      institution: 'University of Mumbai',
      degree: "Bachelor's in Computer Engineering",
      from: '2018',
      to: '2022',
    },
  ],
  
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)

// this can be use to display blog later on
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },



  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/blackhat955"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
