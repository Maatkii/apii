import "./App.css";
import UserList from "./components/UserList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const getUsers = () => {
  //the function to post data to the api
  //fetch("https://jsonplaceholder.typecode.com/users", {
  // method: "GET",
  //headers: {
  // Accept: "application/json",
  // "content-Type": "application/json",
  // },
  //body: JSON.stringify(user), //setting the body
  //})
  //.then((res) => res.json())
  //.then((res) => (res.length > 0 ? setUsers(res) : null))
  //.then((err) => console.log(err));
  //};
  //with axios

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
