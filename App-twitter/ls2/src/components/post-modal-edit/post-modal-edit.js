import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PostFormEdit from '../post-form-edit';

// import './post-modal-edit';
// import styled from 'styled-components';

const PostModalEdit = (onPushMes) => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Button color="success" className="btn-pencil btn-sm" onClick={toggleModal}>
        <i className="fa fa-pencil"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Редактирование сообщения</ModalHeader>
        <ModalBody>
          <PostFormEdit onPushMes={onPushMes}/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Отмена</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default PostModalEdit;