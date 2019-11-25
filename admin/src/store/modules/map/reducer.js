import produce from 'immer';

const INITIAL_STATE = {
  locate: null,
};

export default function user(state = INITIAL_STATE, action) {
  console.tron.log(action.type);
  console.tron.log(action.payload);
  switch (action.type) {
    case '@map/MAP_SUCCESS':
      return produce(state, draft => {
        draft.lacate = action.payload.locate;
      });
    default:
      return state;
  }
}
