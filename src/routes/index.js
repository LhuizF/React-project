import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import error404 from '../pages/error404';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Alunos} />
            <PrivateRoute
                exact
                path="/aluno:id/edit"
                component={Aluno}
                isClosed
            />
            <PrivateRoute exact path="/aluno" component={Aluno} isClosed />
            <PrivateRoute
                exact
                path="/aluno:id/delete"
                component={Aluno}
                isClosed
            />
            <Route exact path="/fotos/:id" component={Fotos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="*" component={error404} />
        </Switch>
    );
}
