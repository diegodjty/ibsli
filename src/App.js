
import MobileHeader from './components/mobile/MobileHeader';
import ScrollToTop from './components/ScrollToTop';

import Homepage from './pages/Homepage'
import Export from './pages/NewYork/Export';


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
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/newyork/export" component={Export}/>
        </Switch>
      {/* <Footer /> */}
  </HashRouter>
  )}

export default App;
