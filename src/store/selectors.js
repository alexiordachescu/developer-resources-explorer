export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};
