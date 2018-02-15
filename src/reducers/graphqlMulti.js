import {
  BEGIN_GRAPHQL_MULTI,
  END_GRAPHQL_MULTI,
  MESSAGE_GRAPHQL_MULTI,
  MESSAGE_CLEAR_GRAPHQL_MULTI,
  RECIEVE_LOOKAHEAD
} from '../actions/graphqlMulti'

export default function graphqlMultiReducer(state = {data: [], message: null, lookahead: []}, action) {
  switch(action.type) {
    case BEGIN_GRAPHQL_MULTI:
      return {...state}
      
    case END_GRAPHQL_MULTI:
      const { data } = action
      return {...state, data }

    case RECIEVE_LOOKAHEAD:
      const { lookahead } = action;
      return { ...state, lookahead }

    case MESSAGE_GRAPHQL_MULTI:
    case MESSAGE_CLEAR_GRAPHQL_MULTI:
      const { message } = action
      return {...state, message }

    default:
      return state;
  }
}
