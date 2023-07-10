import { NavLink } from "react-router-dom"

// import MainContent from "./components/mainContent"
// import { useDispatch } from "react-redux"
// import buyActionMobile from "./redux/productAction";
// import { useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.buyM);

  return (


    <>
      <center>
        <nav>

          <NavLink to='/'>Main</NavLink>


        </nav>

        {/* <h1>App component</h1> */}
        {/* <button className="btn btn-danger" onClick={() => dispatch(buyActionMobile())}>click</button><br />
        {data} */}
      </center>

    </>
  )
}

export default App
