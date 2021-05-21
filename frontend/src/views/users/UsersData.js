// import axios from "axios";
// import React, { Fragment } from "react";

// class Datauser extends Component {
//   state = {
//     usersData: [],
//   };

//   componentDidMount() {
//     const apiUrl = "https://sharingvision-backend.herokuapp.com/user";
//     axios.get(apiUrl).then((repos) => {
//       this.setState({
//         usersData: repos.data,
//       });
//       // console.log(repos);
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//       {
//         this.state.usersData.map(usersData => {
//           return ()
//         });
//       }
//       </Fragment>
//     )
//   }
// }

// export const GET_USERS_LIST = "GET_USERS_LIST";

// export const UsersData = () => {
//   return (dispatch) => {
//     const apiUrl = "https://sharingvision-backend.herokuapp.com/user";
//     axios.get(apiUrl).then((repos) => {
//       // const usersData = repos.data;
//       console.log(repos.data);
//     });
//   };
// };

//================================
// const usersData = [];
// const apiUrl = "https://sharingvision-backend.herokuapp.com/user";
// axios.get(apiUrl).then((repos) => {
//   const usersData = repos.data.data;
//   console.log(usersData);
// });

const usersData = {
  data: [
    {
      id: 33,
      name: "Maman Racing",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "mamanracing99",
    },
    {
      id: 35,
      name: "Mamat Geboy",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "mamatgeboy",
    },
    {
      id: 42,
      name: "elina",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "elin89",
    },
    {
      id: 43,
      name: "mamat bolenang",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "bolenang182",
    },
    {
      id: 44,
      name: "cika cikaka",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "cikaka9182",
    },
    {
      id: 45,
      name: "kimoy uwu",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "kimoy9982",
    },
    {
      id: 48,
      name: "Lawak Badut",
      password: "ky88G1YlfOhTmsJp16q0JVDaz4gY0HXwvfGZBWKq4+8=",
      username: "lawakbadut9oo",
    },
    {
      id: 49,
      name: "test",
      password: "HBtyruG/YnWfNNJU4PuM4tr7SA1CvFqx9a8L225T0Qg=",
      username: "testB",
    },
    {
      id: 51,
      name: "sdfghjkl",
      password: "XIBWXbbynaCwGqElIsN7MvEhy+R6hh738AbLIpIt/6E=",
      username: "sdfghjkl",
    },
    {
      id: 52,
      name: "hello",
      password: "xwzfSjEqo5Pikt/ZtO7+0ABETk8yNbOoI4JC0iJMQgI=",
      username: "hellno2",
    },
  ],
};
export default usersData;
