import axios from "axios";

export const usersData = () => {
  return (dispatch) => {
    axios
      .get("https://sharingvision-backend.herokuapp.com/user")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};

export default usersData;
