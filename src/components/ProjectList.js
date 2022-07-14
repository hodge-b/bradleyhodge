import {nanoid} from 'nanoid'

const bg_trackify = require("../images/trackify.png")
const bg_bradleyhodge = require("../images/bradleyhodge.png")
const bg_wordle = require("../images/wordle.png")


const projects = [
    {
        id: nanoid(),
        title: 'Trackify - Bug Tracker',
        description: 'An in-house application that companies can use to keep track of issues and bugs within their software projects. Trackify is a showcase of my backend capabilities with PHP and MySQL.',
        tech: ['HTML','Bootstrap','PHP','MySQL'],
        link: 'https://trackify-bugtracker.herokuapp.com/login.php',
        codeLink: 'https://github.com/hodge-b/trackify',
        background: bg_trackify
    },
    {
        id: nanoid(),
        title: 'bradleyhodge.ca',
        description: 'My main portfolio website built with the React framework, it also utilizes React\'s styled components.',
        tech: ['React', 'Styled-Components', 'CSS Styling', 'JavaScript'],
        link: 'https://bradleyhodge.ca',
        codeLink: 'https://github.com/hodge-b/bradleyhodge.ca',
        background: bg_bradleyhodge
    },
    {
        id: nanoid(),
        title: 'Wordle in React',
        description: 'This is a Wordle clone I have built using only the React framework.',
        tech: ['React', 'CSS Styling', 'JavaScript'],
        link: 'https://wordle-in-react.herokuapp.com',
        codeLink: 'https://github.com/hodge-b/wordle_clone_app',
        background: bg_wordle
    }
]

export {projects};