enum IconMain {
    GITGUB = "github",
    TWITTER = "twitter",
    DISCORD = "discord",
    LINKED = "linked",
}

export interface Card {
    id: string;
    link: string;
    url: string;
    iconMain: IconMain;
    iconSec: IconMain;
    chip: ChipI[];
    numberProy: string;
    nameProy: string;
}


export interface ChipI {
    id: string;
    title: string;
    num: string;
}

export const cardData: Card[] = [
    {
        id: 'item1',
        link: '@alevarez',
        url: 'https://github.com/alevarez', 
        iconMain: IconMain.GITGUB, 
        iconSec: IconMain.GITGUB, 
        chip: [
            {id: 'chip1', title: 'repos', num: '23'},
            {id: 'chip2', title: 'follow', num: '45'},
        ],
        numberProy: '21',
        nameProy: 'nest-started'
    },
    {
        id: 'item2',
        link: '@drop_developer',
        url: 'https://twitter.com/drop_developer', 
        iconMain: IconMain.TWITTER, 
        iconSec: IconMain.TWITTER, 
        chip: [
            {id: 'chip3', title: 'follow', num: '146'},
            {id: 'chip4', title: 'followers', num: '23'},
        ],
        numberProy: '127',
        nameProy: 'likes count'
    },
    {
        id: 'item3',
        link: '@alevarez',
        url: 'https://alevarez.slack.com/', 
        iconMain: IconMain.DISCORD, 
        iconSec: IconMain.DISCORD, 
        chip: [
            {id: 'chip5', title: 'subscribers', num: '45'},
        ],
        numberProy: '30',
        nameProy: 'join in 1 day'
    },
    {
        id: 'item4',
        link: '@alevarez',
        url: 'https://www.linkedin.com/in/alejandro-alvarez-39b766249/', 
        iconMain: IconMain.LINKED, 
        iconSec: IconMain.LINKED, 
        chip: [
            {id: 'chip6', title: 'profiel', num: '23'},
            {id: 'chip7', title: 'follow', num: '45'},
        ],
        numberProy: '12',
        nameProy: 'articles'
    }
]


export interface MentorCard {
    title: string;
}

export const MENTOR_DATA: MentorCard[] = [
    {title: 'Nuxt 3 Mentorship'},
    {title: 'Vue 3 Mentorship'},
    {title: 'NestJs Mentorship'},
]