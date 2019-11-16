import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './post-modal-delete';
import styled from 'styled-components';

const PostModalDelete = (props) => {
  const {className, onDelete} = props;
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Button color="warning" className="btn-trash btn-sm" onClick={toggleModal}>
        <i className="fa fa-trash-o"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Удаление сообщения</ModalHeader>
        <ModalBody>
          Вы уверены, что хотите удалить сообщение?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onDelete}>Да</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Нет</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}


export default PostModalDelete;