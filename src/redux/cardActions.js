export const addItem = (iteme) => ({
    type: 'ADD_ITEM',
    payload: iteme,
  });
  
  export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: itemId,
  });
  export const updateQuantity = (itemId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { itemId, quantity }
  });
  