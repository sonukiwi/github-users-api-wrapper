const axios = require("axios");
const config = require("./config.json");
const USERS_API = config.GITHUB_USERS_API;
const SINGLE_USER_API = config.GITHUB_USER_API;

const get_top_users = async () => {
  const returnVal = {
    data: null,
    error: null,
  };
  try {
    const response = await axios.get(USERS_API);
    returnVal.data = response.data;
    returnVal.error = null;
  } catch (err) {
    console.error(err);
    returnVal.data = null;
    returnVal.error = err;
  }
  return returnVal;
};

const get_single_user = async (userName) => {
  const returnVal = {
    data: null,
    error: null,
  };
  try {
    const response = await axios.get(
      SINGLE_USER_API.replace("__USERNAME__", userName)
    );
    returnVal.data = response.data;
    returnVal.error = null;
  } catch (err) {
    console.error(err);
    returnVal.data = null;
    returnVal.error = err;
  }
  return returnVal;
};

module.exports = { get_top_users, get_single_user };
