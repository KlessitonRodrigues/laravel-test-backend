import styled, { css } from 'styled-components';

import { animations, cssSize } from 'src/styles/utils';

export const ModalContainer = styled.div<{ show: boolean }>(
  ({ show }) => css`
    display: ${show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.3s ${animations.fadeIn} ease-out;
    background-color: #0008;
    z-index: 2;
  `,
);

export const ModalHeader = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .icon-close {
      cursor: pointer;
    }
  `,
);

export const ModalContent = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${cssSize(250)};
    max-height: ${cssSize(280)};
    padding: ${cssSize(6)} ${cssSize(8)};
    background-color: #fff;
    border-radius: ${theme.radius.large};
    overflow: auto;
    animation: 0.3s ${animations.slideUp} ease-out;
  `,
);
