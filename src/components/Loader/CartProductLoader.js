import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loader = await fetch('products.json')
    const products = await loader.json()
    
    // if cart data in database you have to use async await
    const storedCart = getShoppingCart() ;
    let saveCart = []

    for(const id in storedCart){
        const addProduct = products.find(pd => pd.id === id);
        if(addProduct){
            const quantity = storedCart[id];
            addProduct.quantity = quantity ;
            saveCart.push(addProduct)

        }
    }



    return saveCart ;


}

export default cartProductsLoader