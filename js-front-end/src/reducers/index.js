import { CREATE, UPDATE, DELETE } from './../actions';

export const initialState = [{
  type: 'null',
  startTime: 'null',
  duration: 'null',
  intensityLevel: 'null',
  location: 'null',
  registered: 'null',
  maxRegiter: 'null',
}]

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(CREATE): return ({
      // payload should be an object with all the new class session data appended to the array of already-existing classes
      //...state, action.payload
    })
    case(UPDATE): return ({
      // bound to an update button event that uses that class session id to update state for that particular class session (will class sessions have to be assigned unique ids?)
      //...state
    })
    case(DELETE): return ({
      // bound to a delete button event that removes class session id from state
      //...state
    })
  }
}

export default reducer;