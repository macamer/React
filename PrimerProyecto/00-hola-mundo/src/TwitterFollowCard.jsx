import { useState } from 'react' //hooks

export function TwitterFollowCard ({ children, userName }) {
    const [isFollowing, setIsFollowing] = useState(false) 


    const imageSrc = `https://unavatar.io/${userName}` //así se pueden usar los parámetros
    //texto condicional
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    //cambiar las clases
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src= {imageSrc} 
                    alt="el avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}