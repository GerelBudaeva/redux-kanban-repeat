import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';

function EditTask(props) {
    const [modal, setModal] = useState(false);

    const [name, setName] = useState(props.task.name);
    const [description, setDescription] = useState(props.task.description);
    const [status, setStatus] = useState(props.task.status);
    const [priority, setPriority] = useState(props.task.priority);


    const editButtonHandler = () => {
        const updateTask = {name, description, status, priority}
        props.editTask(props.task._id, updateTask)
        toggle()
    }
    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="outline-primary" onClick={toggle}>
                Edit
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Edit task</ModalHeader>
                <ModalBody>
                    <div className="input-group flex-nowrap">
                        <input type="text"
                               className="form-control"
                               placeholder="Name"
                               aria-label="Username"
                               aria-describedby="addon-wrapping"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <br/>

                    <div className="input-group flex-nowrap">
                        <input type="text"
                               className="form-control"
                               placeholder="Description"
                               aria-describedby="addon-wrapping"
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <br/>

                    <select className="form-select"
                            aria-label="Default select example"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                    >
                        {props.statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                    </select>
                    <br/>

                    <select className="form-select"
                            aria-label="Default select example"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                    >
                        {props.priorities.map((el, ind) => <option key={ind} value={el}>{el}</option>)}
                    </select>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    priorities: state.priorities,
})

const mapDispatchToProps = (dispatch) => ({
    editTask: (id, updateTask) => dispatch ({type: 'EDIT_TASK', payload: {id, updateTask}})
})
export default connect(mapStateToProps, mapDispatchToProps) (EditTask);
