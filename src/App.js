import React from 'react';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import ROUTES, { RenderRoutes } from './routes'

function App() {
  const history = useHistory();
  console.log('1', history);
  function logout() {
    console.log('2', history);
    localStorage.removeItem("user");
    history.push("/");
  }
  
  return (
    <Router>
     <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>
          {/* {displayRouteMenu(ROUTES)} */}
           <button onClick={logout}>Log Out</button>
      </div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
      </div>
    </Router>
  );
}

export default App;


function displayRouteMenu(routes) {
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  return (
    <ul>
      {routes.map(route => {
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }
        return singleRoute(route);
      })}
    </ul>
  );
}