import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
export const forgot = {
  state: {
    forgotData: [],
  },

  reducers: {
    setForgot: (state, payload) => {
      return {
        ...state,

        forgotData: payload,
      };
    },
  },

  effects: (dispatch) => ({
    getForgotAsync: async (payload, rootState) => {
      try {
        let body = payload;

        console.log(body);

        const url = "/forgot-passsword";

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axiosInstance.post(url, body, config);

        const { data = undefined } = response;

        if (data) {
          dispatch.forgot.setForgot(data);
          
        }
      } catch (error) {
        console.log("Api > Error >Forgot >  ", error.response);

        throw error;
      }
    },
  }),
};
