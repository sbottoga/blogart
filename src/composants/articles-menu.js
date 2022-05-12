import { Link } from "react-router-dom"
import styled from 'styled-components'
import { BrowserRouter } from "react-router-dom"

export const ArticlesMenu = (props) => {
    const StyledLink = styled(Link)`
    
        
        color : black;
        text-decoration: none;
        line-height     : 60px;
        padding-left    : 20px;
        padding-right   : 20px;
        
        
      
    `
    return (

        <header className='Menuprincipal'>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/ecrire">Ecrire</StyledLink>
                <StyledLink to="/contact">Nous contacter</StyledLink>
            </nav>
        </header>

    )


}