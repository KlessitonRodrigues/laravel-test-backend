import { LuSearch } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

import If from 'src/lib/base/If';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { Image } from 'src/lib/base/StyledComponents/Images';
import { Input, InputBoxSmall } from 'src/lib/base/StyledComponents/Inputs';
import logoBlack from 'src/public/images/logoTitleBlack.png';

import { Container } from './styled';

const AppHeader = () => {
  const location = useLocation();

  return (
    <Container>
      <Row responsive w="60rem">
        <Image w="8rem" m="0 1rem 0 0" src={logoBlack} />
        <InputBoxSmall>
          <LuSearch size={14} />
          <Input />
        </InputBoxSmall>
      </Row>

      <If check={location.pathname === '/app/home'}>
        <Link to="/app/announce">
          <MainButton>Create new Annouce</MainButton>
        </Link>
      </If>
      <If check={location.pathname === '/app/announce'}>
        <Link to="app/home">
          <MainButton>Create new Annouce</MainButton>
        </Link>
      </If>
      <If
        check={location.pathname === '/app/announce'}
        true={<MainButton>Create new Annouce</MainButton>}
      />
    </Container>
  );
};

export default AppHeader;
