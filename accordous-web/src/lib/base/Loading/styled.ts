import styled, { css } from 'styled-components';

import { animations, cssSize } from 'src/styles/utils';

export const Container = styled.div(() => css``);

export const FullScreen = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0009;
    color: ${theme.colors.white};
    z-index: 2;
  `,
);

export const Spinner = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${cssSize(8)};
    animation: ${animations.spinning} 0.3s infinite linear;
  `,
);

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.label};
  `,
);
