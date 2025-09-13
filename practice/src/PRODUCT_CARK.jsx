function PRODUCT_CART(Product) {
    return (
        <div className="box">
            <div className="c1">
                <p>PRODUCT_NAME : {Product.product_name}</p>
            </div>
            <div className="c2">
                <p>PRICE : {Product.price}</p>
            </div>
            <div className="c3">
                <p>{Product.isavailable === true ?  <p className="in"> IN STOCK </p>: <p className="out"> OUT STOCK</p>}</p>
            </div>
        </div>
    )
}
export default PRODUCT_CART 