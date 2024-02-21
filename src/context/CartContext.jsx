import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const updateItem = (itemID, newQuantity) => {
    const cartUpdated = cart.map((prod) => {
      if (prod.id === itemID) {
        return { ...prod, quantity: newQuantity };
      }
      return prod;
    });
  
    setCart(cartUpdated);

    console.log(cart)
  };

  //Editar cantididad + (agregar) y - (sacar)

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  //Funciones extra:

  const sumQuantities = (items) => {
    if (!items.length) return 0;
    const totalAmount = items.reduce((acumulador, producto) => {
      return acumulador + producto.quantity;
    }, 0);
    return totalAmount;
  };

    const sumPrice = (items) => {
    if (!items.length) return 0;
    const totalAmount = items.reduce((acumulador, producto) =>{
        return acumulador + (parseInt(producto.price)* producto.quantity);
    }, 0);
    return totalAmount;
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, sumQuantities, sumPrice, updateItem}}>
      {children}
    </CartContext.Provider>
  );
};
