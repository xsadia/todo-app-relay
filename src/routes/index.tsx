import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/" component={LoginPage} />
        </Switch>
    );
};