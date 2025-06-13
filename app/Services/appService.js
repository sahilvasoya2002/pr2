import axios from "axios";
export const getUserCompanyList = (userId) => async (dispatch) => {
//   try {
//     dispatch(setUserLoading(true));
//     const response = await getCompanyListByUser(userId);
//     if (response) {
//       let currentWorkspace = UserPreferenceSingleton.getInstance().getCurrentWorkspace();
//       const isFoundCompany = response?.find((x: any) => x?.id === currentWorkspace?.id)
//       if ((!currentWorkspace || !isFoundCompany) && response?.length > 0) {
//         UserPreferenceSingleton.getInstance().setCurrentWorkspace(response[0]);
//         currentWorkspace = response[0];
//       }
//       const updatedList = response?.map((company: any) => {
//         return currentWorkspace?.id === company?.id ? { ...(company || {}), isDefault: true } : company;
//       });
//       dispatch(setCompanyList(updatedList));
//       return response;
//     }
//     return false;
//   } catch (e) {
//     dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
//     return false;
//   } finally {
//     dispatch(setUserLoading(false));
//   }
};


const API_BASE_URL = "https://api.example.com"; // Replace with your base URL

export const postRequest = async (endpoint, payload) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
      headers: headers,
    });

    return response?.data; // Return the response data
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error; // Throw error for handling in caller function
  }
};
