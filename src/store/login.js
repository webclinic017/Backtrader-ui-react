import axiosInstance from "../utils/axiosInstance";


export const login = {
    state: {
      loginData: [],
    },
    reducers: {
        setLogin: (state, payload) => {
          return {
            ...state,
            loginData: payload,
          };
        },
      },
      effects: (dispatch) => ({
        getLoginAsync: async (payload2, rootState) => {
       
            try {
                let body = JSON.parse(payload2);
                console.log(payload2);
                const url = "/login";
              
                const config = {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  };
                  
                  const response = await axiosInstance.post(url, body, config);
          console.log(response);
              
              
                const { data = undefined } = response;
              
                if (data) {
          
                    localStorage.setItem('token', data.token);
                  
                    dispatch.login.setLogin(data);
                  }
              
              } catch (error) {
                console.log('Api > Error >Login >  ', error.response);
                throw error;
              }
            },              
  }),
};
