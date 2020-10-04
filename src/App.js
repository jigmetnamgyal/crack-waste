import React, {Component, Fragment} from 'react';
import {Route} from 'react-router';
import {inject, observer} from 'mobx-react';
import Main from './components/MainPage/MainPage'
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import NavBar from './components/Navigation/Navigation';
import GeoLocation from './pages/GeoLocation'
// import TasksPage from './pages/tasks/TasksPage'; import CreateTaskPage from
// './pages/create-task/CreateTaskPage';
@inject('routerStore')
@observer
class App extends Component {
    render() {
        return (
            <div>

                <Fragment>
                    <Route exact="exact" path="/" component={SignInPage}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/signin/" component={SignInPage}/>
                    <Route path="/signup/" component={SignUpPage}/> 
                    {/* <Route exact path="/tasks" component={TasksPage} />
        <Route exact path="/tasks/create" component={CreateTaskPage} /> */}
                     <Route path="/home" component={GeoLocation}/>
                </Fragment>
            </div>

        );
    }
}

export default App;
