import { SessionTypes } from "../utils/sessionUtils";
export const user = {
    state: {
     date:"ggg",
      paidSession: true,
      activeSessionType: SessionTypes.SELECT_DATE,
      scroll:"",
    },
    reducers: {
     
      setPaidSession: (state, payload) => {
        return {
          ...state,
          paidSession: payload,
        };
      },
      setActiveSessionType: (state, payload) => {
        return {
          ...state,
          activeSessionType: payload,
        };
      },
      setDate: (state, payload) => {
        return {
          ...state,
          date: payload,
        };
      },
      setScroll: (state, payload) => {
        return {
          ...state,
          scroll: payload,
        };
      },
      
    },
    effects: (dispatch) => ({
        loginAsync: async (payload, rootState) => {
          //TODO
        },
      }),
}