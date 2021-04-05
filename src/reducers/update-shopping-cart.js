const updateCartItems = (items, book, quantity) => {
  return items.findIndex(({ id }) => id === book.id) > -1
    ? items
        .map((item) =>
          item.id === book.id
            ? { ...item, count: item.count + quantity, total: item.total + book.price * quantity }
            : item
        )
        .filter(({ count }) => count > 0)
    : [
        ...items,
        {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price,
        },
      ];
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
    };
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      const book = state.bookList.books.find((book) => book.id === action.payload);
      return {
        cartItems: updateCartItems(state.shoppingCart.cartItems, book, 1),
      };
    }
    case 'BOOK_REMOVED_FROM_CART': {
      const book = state.bookList.books.find((book) => book.id === action.payload);
      return {
        cartItems: updateCartItems(state.shoppingCart.cartItems, book, -1),
      };
    }
    case 'ALL_BOOKS_REMOVED_FROM_CART': {
      const bookId = action.payload;
      const book = state.bookList.books.find(({ id }) => id === bookId);
      const { count } = state.shoppingCart.cartItems.find(({ id }) => id === bookId);
      return {
        cartItems: updateCartItems(state.shoppingCart.cartItems, book, -1 * count),
      };
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
