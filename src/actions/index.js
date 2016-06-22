export function selectBook(book) {
  // selectBook is an ActionCreator
  // Returns an object with a type property, optionally a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
