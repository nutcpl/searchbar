import "./App.css";
import { connect } from "react-redux";
import {thunk_action_creator} from "./actions/fetchaction";
import UserInfo from "./UserInfo";

function App(props) {
  let getUsername;

  const handleSubmit = (e) => {
    // หน้าเว็บจะไม่ refresh
    e.preventDefault();
    const username = getUsername.value;
    props.dispatch(thunk_action_creator(username));
    getUsername.value = "";
  };

  console.log(props.data);

  return (
    <div className="Container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Enter GitHub Username</h1>
        <input
          type="text"
          placeholder="Enter Github username"
          required
          //เก็บข้อมูลที่ input เข้ามา
          ref={(input) => (getUsername = input)}
        />

        <button className="button">Submit</button>
      </form>
      {/* เช็คเงื่อนไข */}
      {props.data.isFetching ? <h3>Loading</h3> : null}
      {props.data.isError ? (
        <h3 className="error">user is not exists.</h3>
      ) : null}
      {Object.keys(props.data.userData).length > 0 ? (
        <UserInfo user={props.data.userData} />
      ) : null}
    </div>
  );
}

// แปลง state จาก redux store ไปเป็น props เพื่อที่จะได้ส่งข้อมูลไปยัง component ของเราได้
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

// connect ทำให้ component react เชื่อมต่อกับ redux store ได้
export default connect(mapStateToProps)(App);
// import { connect } from 'react-redux'
// import UserInfo from './UserInfo'
// import { thunk_action_creator } from './actions/fetchaction'

// function App(props) {

//   let getUsername;
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = getUsername.value;
//     props.dispatch(thunk_action_creator(username))
//     getUsername.value = "";
//     console.log(username);
//   }
  
//   console.log(props.data)
  
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form">
//         <h2 className="title">Enter the Github Username</h2>
//         <input 
//           type="text"
//           placeholder="Enter Github Username"
//           required
//           ref={input => (getUsername = input)}
//         />
//       <button className="button">Submit</button>
//       </form>
//       {props.data.isFetching ? <h3>Loading...</h3> : null}
//       {props.data.isError ? (
//         <h3 className="error">No such User exists.</h3>
//       ) : null}
//       {Object.keys(props.data.userData).length > 0 ? (
//         <UserInfo user={props.data.userData} />
//       ) : null}
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     data: state
//   }
// }

// export default connect(mapStateToProps)(App);