import axiosInstance from "../utils/axiosInstance";

export const reset = {
  state: {
    resetData: [],
  },
  reducers: {
    setReset: (state, payload) => {
      return {
        ...state,
        resetData: payload,
      };
    },
  },
  effects: (dispatch) => ({
    
     
        getResetAsync: async (data, tokenString) => {
          try {
          console.log(typeof(tokenString));
            const url = `/reset-password?token=${tokenString}`;
      console.log(url);
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
      
            const response = await axiosInstance.post(url, data, config);
      
            const { data: responseData = undefined } = response;
      
            if (responseData) {
              console.log("reset successful");
              dispatch.reset.setReset(responseData);
            }
          } catch (error) {
            console.log("Api > Error > Register >  ", error.response);
            throw error;
          }
        },
      }),
    };
       
    