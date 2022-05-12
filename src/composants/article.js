export const Article= (props) => {
    const {user_id, id, title, body} = props.article
    return(
        <div>
            <div>{title}</div>
             <div>{body}</div>
         
        </div>
    )
}