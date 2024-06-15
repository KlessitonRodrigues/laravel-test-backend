import { Column } from 'src/lib/base/StyledComponents/Flex';
import { getText } from 'src/utils/i18n';

import If from '../If';
import { Container, Description, FullScreen, Spinner, Title } from './styled';

const Loading = (props: Props.Loading) => {
  const { show, type, title, description } = props;
  return (
    <Container>
      <If check={show && type === 'icon'}>
        <Spinner></Spinner>
      </If>

      <If check={show && type === 'fullScreen'}>
        <FullScreen>
          <Spinner></Spinner>
          <Column gap={4}>
            <Title>{title || getText('loding_title')}</Title>
            <Description>{description}</Description>
          </Column>
        </FullScreen>
      </If>
    </Container>
  );
};

export default Loading;
