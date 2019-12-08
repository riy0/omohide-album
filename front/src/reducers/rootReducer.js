const initState = {
  posts: [
    { id: "1", title: "title1", body: "body" },
    { id: "2", title: "title1", body: "body" },
    { id: "3", title: "title1", body: "body" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
