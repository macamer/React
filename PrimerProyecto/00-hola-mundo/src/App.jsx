import './App.css'
import './TwitterFollowCard.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className="App"> 
            <TwitterFollowCard userName='macamer' name='Maria Cavaller' />
            <TwitterFollowCard userName='midudev' name='Miguel Ángel Durán' />
            <TwitterFollowCard userName='elonmusk' name='Elon Musk' />
            <TwitterFollowCard userName='pheralb' name='Pablo Hernández' />
        </section>
    )
}