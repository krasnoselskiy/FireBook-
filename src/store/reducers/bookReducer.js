const initialState = {
  books: [
    {
      id: "1",
      title: "Nam quaerat iure iste accusamus",
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: "12",
      title: "Quam recusandae iste reprehenderit",
      description: "Dolores labore quibusdam cum unde"
    },
    {
      id: "13",
      title: "Dolor sit amet consectetur",
      description: "Quos qui accusantium necessitatibus"
    }
  ]
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      console.log("CREATE_BOOK", action.book);
      break;
    case "CREATE_BOOK_ERR":
      return state;
    default:
      return state;
  }
};

export default bookReducer;
