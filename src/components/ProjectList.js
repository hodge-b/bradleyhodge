import {nanoid} from 'nanoid'

import bg_bradleyhodge from '../images/bradleyhodge.png'
import bg_wordle from '../images/wordle.png'


const projects = [
    {
        id: nanoid(),
        title: 'bradleyhodge.ca',
        description: 'My main portfolio website built with the React framework.',
        tech: ['React', 'CSS Styling', 'JavaScript'],
        link: '#contact-section',
        background: bg_bradleyhodge
    },
    {
        id: nanoid(),
        title: 'Wordle in React',
        description: 'This is a Wordle clone I have built using only React.',
        tech: ['React', 'CSS Styling', 'JavaScript'],
        link: '/wordle',
        background: bg_wordle
    }
]

export {projects};