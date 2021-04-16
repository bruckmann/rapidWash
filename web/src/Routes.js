import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SchedulePage from './pages/schedule';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SchedulePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;