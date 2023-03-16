import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';

function AddNewTask(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(props.statuses[1]);
    const [priority, setPriority] = useState(props.priorities[3])

    const toggle = () => setModal(!modal);

    const onSaveButtonHandler = () => {
        toggle()
        const newTask = {_id: Math.random().toString(), name, description, status, priority}
        props.createTask(newTask)
        setName('');
        setPriority(props.priorities[0]);
        setDescription('');
        setStatus(props.statuses[0]);
    }


    return (
        <>
            <Button color="outline-success" onClick={toggle}>
                Add new task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
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
                        <option selected>Status</option>
                        {props.statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                    </select>
                    <br/>

                    <select className="form-select"
                            aria-label="Default select example"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                    >
                        <option selected>Priority</option>
                        {props.priorities.map((el, ind) => <option key={ind} value={el}>{el}</option>)}
                    </select>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSaveButtonHandler}>
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
    priorities: state.priorities
})

const mapDispatchToProps = (dispatch) => ({
    createTask: (newTask) => dispatch ({type: 'CREATE_TASK', payload: newTask})
})

export default connect (mapStateToProps, mapDispatchToProps) (AddNewTask);

