import {Component} from "react"
import {Route, Routes} from "react-router-dom"
import { ArticlesListe } from "./articles-list.js"
import { ContactInfo } from "./affiche-contact.js"
import {ArticleSaisie} from "./article-saisie.js"
import {Card} from "./card.js"
export const ArticleRouter = (props) => {

    return (
        
        <Routes>
            
            <Route path="/" element={<ArticlesListe articles={props.articles}></ArticlesListe>}></Route>
            <Route path="/ecrire" element={<ArticleSaisie nouvel_art={props.element}/>}></Route>
            <Route path="/contact" element={<ContactInfo/>}></Route> 
            
        </Routes>
    )
}