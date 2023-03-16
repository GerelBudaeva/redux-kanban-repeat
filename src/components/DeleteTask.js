import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from 'react-redux';

function DeleteTask(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteButtonHandler = () => {
        toggle()
        props.deleteTask(props.task._id)
    }

    return (
        <>
            <Button color="outline-danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
                <ModalBody>
                    Are you sure do you want to delete <h5>{props.task.name} ?</h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>
                        Yes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch ({type: 'DELETE_TASK', payload: {id}})
})

export default connect(null, mapDispatchToProps) (DeleteTask);
