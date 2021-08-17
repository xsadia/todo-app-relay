import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
};