import { Component } from "react"

export class ArticleSaisie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: 
            {
                userId: 1,
                id: undefined,
                title: undefined,
                body: undefined
              }
        }
    }
 
    
    SaisieTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    SaisieBody = (e) => {
        this.setState({
            body: e.target.value
        })
    }

   /*  Validation = (e) => {
        e.preventDefault()
        
        this.props.nouvel_art()
         
    } */

    render() {
        return (
            <form /* onSubmit={this.Validation} */>
                <h3>Ecrivez votre article</h3>
                <div>
                    <input type="text" name="title" onChange={this.SaisieTitle} placeholder="Saisissez le titre ici" />
                </div>

                <div>
                    <textarea name="body" onChange={this.SaisieBody} placeholder="Saisissez le texte ici" ></textarea>
                </div>

                <div>
                    <button type="submit">Envoyez votre article</button>
                </div>

                <div>
                    {this.state}

                </div>
            </form>
        );
    }
}
;

