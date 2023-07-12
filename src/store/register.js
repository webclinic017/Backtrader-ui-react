import axiosInstance from "../utils/axiosInstance";

export const register = {
  state: {
    registerData: [],
  },
  reducers: {
    setRegister: (state, payload) => {
      return {
        ...state,
        registerData: payload,
      };
    },
  },
  effects: (dispatch) => ({
    getRegisterAsync: async (payload1, rootState) => {
      try {
        console.log("test");
        let body = payload1;
        
        console.log(typeof(body));
        const url = "/signup"; 
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        
        const response = await axiosInstance.post(url, body, config);

        console.log(response);

        const { data = undefined } = response;

        if (data) {
          dispatch.register.setRegister(data);
        }
      } catch (error) {
        console.log('Api > Error > Register >', error.response);
        throw error;
      }
    },
  }),
};
