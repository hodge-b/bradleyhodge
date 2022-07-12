import {nanoid} from 'nanoid'

import bg_bradleyhodge from '../images/bradleyhodge.png'
import bg_trackify from '../images/trackify.png'
import bg_wordle from '../images/wordle.png'


const projects = [
    {
        id: nanoid(),
        title: 'Trackify - Bug Tracker',
        description: 'An in-house application that companies can use to keep track of issues and bugs within their software projects. Trackify is a showcase of my backend capabilities with PHP and MySQL.',
        tech: ['HTML','Bootstrap','PHP','MySQL'],
        link: 'https://trackify-bugtracker.herokuapp.com/login.php',
        background: bg_trackify
    },
    {
        id: nanoid(),
        title: 'bradleyhodge.ca',
        description: 'My main portfolio website built with the React framework.',
        tech: ['React', 'CSS Styling', 'JavaScript'],
        link: 'https://bradleyhodge.ca',
        background: bg_bradleyhodge
    },
    {
        id: nanoid(),
        title: 'Wordle in React',
        description: 'This is a Wordle clone I have built using only React.',
        tech: ['React', 'CSS Styling', 'JavaScript'],
        link: 'https://wordle-in-react.herokuapp.com/',
        background: bg_wordle
    }
]

export {projects};