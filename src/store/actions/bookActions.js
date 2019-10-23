export const createBook = book => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("books")
      .add({
        ...book,
        authorFirstName: "Boris",
        authorLastName: "Krasnoselskiy",
        authorId: Math.ceil(Math.random() * 10000000),
        createdAt: new Date().toLocaleDateString()
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOK", book });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BOOK_ERR", err });
      });
  };
};
