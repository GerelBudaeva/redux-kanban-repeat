import './App.css';
import {connect} from 'react-redux';
import Column from './components/Column';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddNewTask from './components/AddNewTask';

function App(props) {
    return (
        <div className='App'>
            <h1>{props.appName}</h1>

            <AddNewTask/>
            <hr/>

            <div className="container text-center">
                <div className="row align-items-start">
                    {props.statuses.map(el => <Column
                    key={el._id}
                    status={el}
                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    appName: state.appName
})
export default connect(mapStateToProps)(App);
