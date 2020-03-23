const initialState = {
  projects: [
    {
      id: 0,
      title: 'my title 0',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem, repudiandae impedit sint voluptatem placeat possimus magnam quis, voluptates omnis hic quod temporibus officia facilis excepturi eveniet culpa inventore dolorem!'
    },
    {
      id: 1,
      title: 'my title 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem, repudiandae impedit sint voluptatem placeat possimus magnam quis, voluptates omnis hic quod temporibus officia facilis excepturi eveniet culpa inventore dolorem!'
    },
    {
      id: 2,
      title: 'my title 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem, repudiandae impedit sint voluptatem placeat possimus magnam quis, voluptates omnis hic quod temporibus officia facilis excepturi eveniet culpa inventore dolorem!'
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      console.log('project create', action.project);
  }
  return state;
};

export default projectReducer;
