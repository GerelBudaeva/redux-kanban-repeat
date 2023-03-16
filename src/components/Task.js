import React from 'react';
import {connect} from 'react-redux';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const Task = (props) => {
    return (
        <div>
            <div className="card mb-3">
                <div className="card-header">
                    <h3>{props.task.status}</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                    <p className="card-text">
                        <button className="btn btn-outline-secondary"
                                onClick={() => props.changePriority(props.task._id, -1)}
                                disabled={props.priorities[0] === props.task.priority}
                        > ↓
                        </button>
                        {' '}
                        Priority: {props.task.priority}
                        {' '}
                        <button className="btn btn-outline-secondary"
                                onClick={() => props.changePriority(props.task._id, 1)}
                                disabled={props.priorities[props.priorities.length - 1] === props.task.priority}
                        > ↑
                        </button>
                    </p>
                    <hr/>

                    <button className="btn btn-outline-info"
                            onClick={() => props.changedTask(props.task._id, props.task.status, -1)}
                            disabled={props.task.status === props.newStringStatuses[0]}
                    > ←
                    </button>
                    {' '}
                    <DeleteTask task={props.task}/>
                    {' '}
                    <EditTask task={props.task}/>
                    {' '}
                    <button className="btn btn-outline-info"
                            disabled={props.task.status === props.newStringStatuses[props.newStringStatuses.length - 1]}
                            onClick={() => props.changedTask(props.task._id, props.task.status, 1)}
                    > →
                    </button>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    priorities: state.priorities,
    newStringStatuses: state.statuses.map(el => el.title)
})

const mapDispatchToProps = (dispatch) => ({
    changePriority: (id, direction) => dispatch({type: 'CHANGE_PRIORITY', payload: {id, direction}}),
    changedTask: (id, currentStatus, direction) => dispatch({
        type: 'CHANGE_STATUSES',
        payload: {id, currentStatus, direction}
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);
