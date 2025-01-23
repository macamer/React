import './App.css'
import './TwitterFollowCard.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className="App"> 
            <TwitterFollowCard isFollowing userName='macamer'> 
                Maria Cavaller Mercadal
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName= 'midudev'> 
                Miguel Ángel Duran
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName= 'pheralb'> 
                Pablo Hernández
            </TwitterFollowCard>
        </section>
    )
}