import { CREATE, UPDATE, DELETE } from './../actions';

export const initialState = {
  placeholder: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(CREATE): return ({
      ...state
    })
    case(UPDATE): return ({
      ...state
    })
    case(DELETE): return ({
      ...state
    })
  }
}

export default reducer;