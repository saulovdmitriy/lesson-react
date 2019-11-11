import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PostModalDelete = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Удаление сообщения</ModalHeader>
        <ModalBody>
          Вы уверены, что хотите удалить сообщение?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Да</Button>{' '}
          <Button color="secondary" onClick={toggle}>Нет</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default PostModalDelete;