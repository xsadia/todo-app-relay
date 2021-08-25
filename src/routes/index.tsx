import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/" component={LoginPage} />
        </Switch>
    );
};