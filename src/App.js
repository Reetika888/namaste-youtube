import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from "./utils/store";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: <><Demo /><Demo2 /></>,
      }
    ]
  }])
  return (
    <Provider store={ store } >
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} /> 
    </div>
    </Provider>
  );
}
export default App;