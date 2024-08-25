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
  base: '/portfolio/',
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
      header: 'Achievements',
      projects: [
        {
          title: 'Award for Best Final Year Project (Batch 2022)',
          description: 'Received recognition for developing an innovative solution using the A* algorithm to optimize waste collection. The project aimed to predict bin overflow, save fuel, and ensure efficient routes, contributing to a cleaner and more sustainable society.',
          imageUrl: 'https://e7.pngegg.com/pngimages/918/523/png-clipart-university-of-mumbai-alkesh-dinesh-mody-institute-for-financial-management-studies-college-school-emblem-logo-thumbnail.png',
          link: 'https://drive.google.com/file/d/1hh9kIpkihyatecXhPySxU0y7nNC2y7v0/view',
        },
        {
          title: 'Inter College Project Competition',
          description: 'Achieved first place in this competition with a project focused on enhancing community impact through innovative technology. The project was recognized for its potential to make a significant difference in society.',
          imageUrl: 'https://e7.pngegg.com/pngimages/918/523/png-clipart-university-of-mumbai-alkesh-dinesh-mody-institute-for-financial-management-studies-college-school-emblem-logo-thumbnail.png',
          link: 'https://drive.google.com/file/d/1T1AWEc_aR__4-VwP5m0W0iUQVgSQNLlU/view',
        },
        {
          title: 'ICPC Asia Pacific Regionalist',
          description: 'Competed in the prestigious ICPC regional contest, placing in the top 100 teams. The experience honed my problem-solving skills, teamwork, and ability to work under pressure in a competitive environment.',
          imageUrl: 'https://news.cs.washington.edu/wp-content/uploads/2017/12/icpc.png',
          link: 'https://w7.pngwing.com/pngs/827/1021/png-transparent-2017-acm-international-collegiate-programming-contest-competitive-programming-kateb-university-association-for-computing-machinery-acm-icpc-dhaka-site-others-text-medal-logo.png',
        },
        {
          title: 'Vice President of CodeChef Chapter',
          description: 'Served as the Vice President, leading initiatives to promote coding culture and organize programming events. Contributed to building a strong community of coders and fostering competitive programming skills among peers.',
          imageUrl: 'https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg',
          link: 'https://www.codechef.com/certificates/preview/1a5816e',
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
    leetcode:'WhoDareToWin',
    website: 'https://www.innovationwale.com/',
    phone: '',
    email: 'workwithdurgesh99@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1-HckeQYnDRXXyDNwqUHZE_FT_4EGqvfD/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
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
    company: 'Indiana University Luddy School of Informatics, Computing, and Engineering',
    position: 'Graduate Teaching Assistant',
    from: 'August 2024',
    to: 'Present',
    companyLink: 'https://luddy.indiana.edu/',
    bulletPoints: [
      'Provided course support for Android app development basics and advanced topics.',
      'Evaluated app designs and offered constructive feedback.',
      'Assisted with coding issues and guided students on best practices.',
      'Reviewed UI/UX design and assessed sensor integration for student projects.',
    ],
  },
  {
  company: 'Programmers Army',
  position: 'Software Engineer',
  from: 'October 2022',
  to: 'June 2023',
  companyLink: 'https://www.programmersarmy.com',
  bulletPoints: [
    'Improved API response time by 25% by implementing a microservices architecture using Node.js and Express.',
    'Created a CLI tool that safely allows making otherwise risky configuration changes and documented its usage.',
    'Optimized SQL queries for efficient extraction of 250K+ production data in Amazon Athena to meet module needs.',
    'Maximized user engagement by reducing initial loading time by 15% through code-splitting in React.',
    'Boosted deliverable time by 10% through efficient management of software lifecycle and by reviewing system design.',
  ],
},
{
  company: 'ByteLearn',
  position: 'Software Engineer Intern',
  from: 'June 2022',
  to: 'September 2022',
  companyLink: 'https://www.bytelearn.com',
  bulletPoints: [
    'Enhanced chatbot to handle 200 RPS with a latency of >300ms using async state, managing multiple backend APIs.',
    'Integrated Apache Kafka, SQS, S3, and CloudWatch for seamless functionalities.',
    'Identified and fixed edge cases, such as resolving a multi-factor authentication setup issue affecting an estimated 5% of users.',
    'Designed REST APIs, automation, scraping, and data processing scripts with Node.js, Python, and Selenium, achieving a 1000x performance boost over existing systems.',
  ],
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

 educations:[
  {
    institution: 'Indiana University Bloomington',
    degree: "Master's in Data Science",
    from: '2023',
    to: 'Expected May 2025',
    courses: [
      'Advanced Database Concepts (CSCI-B 561)',
      'Applied Algorithms (CSCI-B 505)',
      'Applied Database Technology (DSCI-D 532)',
      'Big Data (INFO-I 535)',
      'Computer Vision (ENGR-E 535)',
      'Data Mining (CSCI-B 565)',
      'Statistics (STAT-S 520)',
      'Time Series Analysis (DSCI-D 590)',
    ],
  },
  {
    institution: 'University of Mumbai',
    degree: "Bachelor's in Computer Engineering",
    from: '2018',
    to: '2022',
    courses: [
      'Database Management (PCC-ITC 302)',
      'Computer Architecture (PCC-ITC 403)',
      'Cryptography and Network Security (PCC-ITC 502)',
      'Automata Theory (PCC-ITC 503)',
      'Operating System (PCC-ITC 501)',
      'Computer Networks (PCC-ITC 404)',
    ],
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
  //       ' ',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       '',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)

// this can be use to display blog later on
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },



  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '5106347',
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
      'dark',
      'synthwave',
      'halloween',
      'black',
      'luxury',
      'night',
      'coffee',
      'winter',
      'nord',
      'sunset',
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
