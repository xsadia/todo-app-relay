import { BrowserRouter, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { Route } from './Route';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" isPrivate exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
};