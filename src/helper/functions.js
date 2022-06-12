export const hasProduct = (cart, id) => {
  const checkProduct = !!cart.find((product) => product.id === id);
  return checkProduct;
};

export const ProductNumber = (cart, id) => {
  const product = cart.find((product) => product.id === id);
  return product ? product.number : false;
};

export const totalCount = (cart) => {
      const itemCount =  cart.reduce((total, current) => current.number+total,0);
      const totalPrise =  cart.reduce((total, current) => current.number*current.price + total ,0).toFixed(2);
      return {itemCount,totalPrise}
  }
