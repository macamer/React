import './App.css'
import './TwitterFollowCard.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const midudev = { isFollowing: true, userName: 'midudev' }
    const phrealb = { isFollowing: false, userName: 'pheralb' }
    return (
        <section className="App"> 
            <TwitterFollowCard isFollowing userName='macamer'> 
                Maria Cavaller Mercadal
            </TwitterFollowCard>
            <TwitterFollowCard {...midudev}> 
                Miguel Ángel Duran
            </TwitterFollowCard>
            <TwitterFollowCard {...phrealb}> 
                Pablo Hernández
            </TwitterFollowCard>
        </section>
    )
}