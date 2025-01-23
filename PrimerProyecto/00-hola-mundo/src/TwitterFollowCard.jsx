export function TwitterFollowCard ({ userName, name, isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}` //así se pueden usar los parámetros

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src= {imageSrc} 
                    alt="el avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}