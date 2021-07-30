import React from 'react'

function Header( {txt, clase, size, margin} ) {
    return (
        <div style={{"padding":"5px 5px, 5px, 5px", "margin": margin}}>
            {
                (size) === 1 ?
                (    
                    <h1 className={clase}>{txt}</h1>
                ):(
                    <h2 className={clase}>
                        {txt}
                    </h2>
                )
                    
            }
        </div>
    )
}

export default Header
