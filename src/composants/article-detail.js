import { withRouter } from "../hoc/withRouter"


export const ArticleDetail = withRouter((props) => {
    const id = props.params.id
    const product = /* props.findProduct(id) */
    return (
        <div>
       {/*  {
            product == undefined ?
            (
                <div>
                    aucun produit avec cet id
                </div>
            )
            :
            (
                <div>
                    Detail Produit
                    {product.title}<br/>
                    {product.price}<br/>
                    <ProductButton id={id} removeFromCart={props.removeFromCart} addToCart={props.addToCart} isInCart={props.isInCart}></ProductButton>
                </div>
            )
        }
        </div>
)
}) */}