import axios from "axios";

const patchData = async (endpoint, data) => {
  try {
    const response = await axios.patch(endpoint, data);
    return response.data;
  } catch (error) {
    throw error; // or handle the error as needed
  }
};

export default patchData;
