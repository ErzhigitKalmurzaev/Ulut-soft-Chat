import { Apple, CloudSunRain, Code, MapPin } from 'lucide-react'


export const examples = [
    {
        id: 1,
        query: 'Алмада кандай витаминдер бар?',
        icon: <Apple size={20} color="red" />
    },
    {
        id: 2,
        query: 'Кыргызстандын аянты',
        icon: <MapPin size={20} color="green" />
    },
    {
        id: 3,
        query: 'Мага жеке веб-сайт жазып бер',
        icon: <Code size={20} color="blue" />
    },
    {
        id: 4,
        query: 'Лондондун аба-ырайы',
        icon: <CloudSunRain size={20} color="yellow" />
    },
]