export const createBook = book => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    const firstName = profile.firstName;
    const lastName = profile.lastName;
    const creationTime = new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
          });

    const creationDate = new Date().toLocaleDateString();

    firestore
      .collection("books")
      .add({
        ...book,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: uid,
        createdAt: `${creationDate} at ${creationTime}`
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOK", book });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BOOK_ERR", err });
      });
  };
};
