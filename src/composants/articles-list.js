import { Component } from "react"
/* import { Article } from "./article" */
import {Card } from "./card"

export const ArticlesListe = (props) => {
    return(
        <div>
            <h3>Liste articles</h3>
             {/* {{props.articles.map((a,i) => (<Article article={a} key={i}></Article>))} } */}
             <div className="row">
             {props.articles.map((a,i) => (<Card article={a} key={i}></Card>))}
             </div>
        </div>
    )
}