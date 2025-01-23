import './App.css'
import './TwitterFollowCard.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className="App"> 
            <TwitterFollowCard userName='macamer' initialIsFollowing={true}> 
                Maria Cavaller Mercadal
            </TwitterFollowCard>
            <TwitterFollowCard userName= 'midudev'> 
                Miguel Ángel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName= 'pheralb'> 
                Pablo Hernández
            </TwitterFollowCard>
        </section>
    )
}