import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import error404 from '../pages/error404';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/login" component={Login} />
            <Route path="*" component={error404} />
        </Switch>
    );
}
