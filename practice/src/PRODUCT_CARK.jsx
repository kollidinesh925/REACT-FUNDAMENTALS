function PRODUCT_CART(Product) {
    return (
        <div>
                <p>PRODUCT_NAME : {Product.product_name}</p>
                <p>PRICE : {Product.price}</p>
                <p>{Product.isavailable === true ? "IN STOCK:OUT STOCK"}</p>
     </div>     
    )
}
export default PRODUCT_CART 