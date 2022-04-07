import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";
import Blogs from "./component/Blogs";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
