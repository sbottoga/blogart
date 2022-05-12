import { Component } from "react"
export class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.article);

        return (

            <div className="card-deck col-4">
                                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.article.title}</h5>
                    </div>
                    <a href="#" className="btn btn-primary">Lire l'article</a>
                </div>
            </div>


        );


    }
}


