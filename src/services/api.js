import axios from 'axios'


const BASE_URL = "https://fakestoreapi.com"
const fetchProductUrl = `${BASE_URL}/products`

const  getData = async () =>{
   
    const products = await axios(fetchProductUrl)
    return products.data
}

export {getData}