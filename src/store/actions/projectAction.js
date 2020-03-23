const createProjectAction = project => {
  return (dispatch, getState) => {
    // async actions
    dispatch({ type: 'ADD_PROJECT', project });
  };
};

export default createProjectAction;
