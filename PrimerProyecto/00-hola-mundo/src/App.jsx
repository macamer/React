import './App.css'
export function App() {
    return (
        //<article style={{ display: 'flex', alignItems: 'center', color: '#fff' }}> --> si quisieramos poner etilos debe ser como si fuera un objeto (js)
        <article>
            <header>
                <img src="https://unavatar.io/kikobeats" alt="el avatar" />
                <div>
                    <strong>Maria Cavaller</strong>
                    <span>@macamer</span>
                </div>
            </header>
            
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}