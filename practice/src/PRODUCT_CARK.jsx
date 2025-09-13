function PRODUCT_CART({product_name,price,isavailable}){
    return(
        <p>PRODUCT_NAME : {product_name};PRICE : {price};AVAILABLITY : {isavailable===true? "TOYS ARE THERE" : "TOYS ARE NOT THERE"}</p>
    )
}
export default PRODUCT_CART 