import React from 'react';
import '../style/App.css';
import Menu from "./Menu";
import PostList from "./PostList";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SearchBar from "./SearchBar";

function App() {
  return (
      <Router>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <Menu />
            <main className="mdl-layout__content">
                <SearchBar />
                <Route path="/movie" component={PostList} />
                <Route path="/tv" component={PostList} />
            </main>
        </div>
      </Router>
  );
}

export default App;
