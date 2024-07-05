import "./Product.css"

function Product({ title, special, feature, oldPrice, price }) {
  return (
    <div className="div">
      <h3>{title}</h3>
      <p>{special}</p>
      <p>{feature}</p>
      <div className="Price">
      <p className="oldPrice">{oldPrice}</p> 
      <p>{price}</p>
      </div>
    </div>
  )
}

export default Product;