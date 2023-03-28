// Use local starager to manage data 
const addToDb =(id)=>{
    let shoppingCart= getShoppingCart();
    // add quntity
    const quantiy = shoppingCart[id]
    if(quantiy){ 
        const newQunatity = quantiy + 1
        shoppingCart[id]=newQunatity 
    }else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const removeFromDb = id =>{
    let shoppingCart = getShoppingCart()
    if(id in shoppingCart){
        delete shoppingCart[id]
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}





// get data in localStorage
const getShoppingCart =() =>{
    let shoppingCart = {};
    const isStored= localStorage.getItem('shopping-cart')
    if(isStored){
        shoppingCart = JSON.parse(isStored)
    }
    return shoppingCart
}