import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const PageContainer = styled.div<{ fullscreen: boolean }>(
  ({ fullscreen }) => css`
    width: 100%;
    height: 100%;
    z-index: 1;
    ${fullscreen && 'width: 100vw;'}
    ${fullscreen && 'height: 100vh;'}
  `,
);

export const PageContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: ${cssSize(10)};
    max-width: ${screenSize.desktopS}px;
  `,
);
