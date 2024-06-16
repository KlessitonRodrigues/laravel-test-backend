import { LuPenLine, LuX } from 'react-icons/lu';

import { Row } from '../StyledComponents/Flex';
import { ModalContainer, ModalContent, ModalHeader } from './styled';

const Modal = (props: Props.Modal) => {
  const { show, title, children, onClose } = props;
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalHeader>
          <Row left>
            <LuPenLine size={24} />
            <h3>{title}</h3>
          </Row>
          <LuX className="icon-close" size={28} onClick={() => onClose && onClose()} />
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
