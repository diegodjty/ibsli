
import MobileHeader from './components/mobile/MobileHeader';
import ScrollToTop from './components/ScrollToTop';

import Homepage from './pages/Homepage'
import NyExport from './pages/NewYork/NyExport';
import LiExport from './pages/LongIsland/LiExport';
import Header from './components/Header'

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <MobileHeader />
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/newyork/export" component={NyExport}/>
          <Route exact path="/longisland/export" component={LiExport}/>
        </Switch>
      {/* <Footer /> */}
  </HashRouter>
  )}

export default App;
