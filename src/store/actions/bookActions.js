export const createBook = book => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    const firstName = profile.firstName;
    const lastName = profile.lastName;
    const creationTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    firestore
      .collection("books")
      .add({
        ...book,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: uid,
        createdAt: creationTime
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOK", book });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BOOK_ERR", err });
      });
  };
};
