import React from 'react';
import {connect} from 'react-redux';
import Task from './Task';

const Column = (props) => {
    return (
        <div className='col'>
            <h2>{props.status.title.toUpperCase()}</h2>
            {props.tasks.filter(el => el.status === props.status.title).map(task => <Task
            key={task._id}
            task={task}
            />)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps) (Column);
