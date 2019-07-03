import { types } from "../../constants";

const initialState = {
  location: {
    coordinates: {
      latitude: undefined,
      longitude: undefined
    }
  },
  status: "failed"
  // temperature: undefined,
  // city: undefined,
  // country: undefined,
  // humidity: undefined,
  // description: undefined,
  // error: undefined
};

export function getBrowserLocationSuccess(newMessage: Message): ChatActionTypes {
  return {
    type: types.GET_BROWSER_LOCATION_SUCCESS,
    payload: newMessage
  }
}

export default function LocationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BROWSER_LOCATION_SUCCESS:
      return {
        ...state,
        location: {
          coordinates: {
            latitude: payload.coords.latitude,
            longitude: payload.coords.longitude
          }
        },
        status: "success"
      };
    case types.GET_BROWSER_LOCATION_FAILED:
      return {
        ...state,
        status: "failed"
      };
    default:
      return initialState;
  }
}
