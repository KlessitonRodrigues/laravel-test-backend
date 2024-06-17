import { LuSearch } from 'react-icons/lu';

import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Image } from 'src/lib/base/StyledComponents/Images';
import { Input, InputBoxSmall } from 'src/lib/base/StyledComponents/Inputs';
import logoBlack from 'src/public/images/logoTitleBlack.png';

import { Container } from './styled';

const AppHeader = (props: Props.AppHeader) => {
  const { onCreateAnnounce } = props;
  return (
    <Container>
      <Row responsive w="60rem">
        <Image w="8rem" m="0 1rem 0 0" src={logoBlack} />

        <InputBoxSmall>
          <LuSearch size={14} />
          <Input placeholder="Search..." />
        </InputBoxSmall>
      </Row>

      <MainButton onClick={() => onCreateAnnounce && onCreateAnnounce()}>
        Create new Announce
      </MainButton>
    </Container>
  );
};

export default AppHeader;
