import './App.css'
export function App() {
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff' }}> --> si quisieramos poner etilos debe ser como si fuera un objeto (js)
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/kikobeats" 
                    alt="el avatar" />
                <div className='tw-followCard-info'>
                    <strong>Maria Cavaller</strong>
                    <span className='tw-followCard-infoUserName'>@macamer</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}