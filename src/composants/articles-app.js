import {Component} from "react"
import {BrowserRouter} from "react-router-dom"
import { ArticleRouter } from "./article-router"
import { ArticlesMenu } from "./articles-menu" 
export class ArticleApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles : 
            [
                
                    {
                      "userId": 1,
                      "id": 1,
                      "title": "TITRE1",
                      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    },
                    {
                      "userId": 1,
                      "id": 2,
                      "title": "TITRE2",
                      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                    },
                    {
                      "userId": 1,
                      "id": 3,
                      "title": "TITRE3",
                      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                    },

                    {
                      "userId": 1,
                      "id": 4,
                      "title": "TITRE4",
                      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                    }
            ],
            
        }
    }

    ajoute_article = (article) => {
      console.log(article)    
     this.setState({ 
         articles: [...this.state.articles, {...article}],
           
      });  
  }

 
    
    render() {
      
        return(
            <BrowserRouter>
            
               <ArticlesMenu/> 
               <ArticleRouter articles={this.state.articles} element={this.ajoute_article}/>
               
            </BrowserRouter>
        )
    }
}