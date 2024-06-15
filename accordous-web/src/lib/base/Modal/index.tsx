import { LuX } from 'react-icons/lu';

import { ModalContainer, ModalContent, ModalHeader } from './styled';

const Modal = (props: Props.Modal) => {
  const { show, title, children } = props;
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2>
          <LuX size={28} />
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
