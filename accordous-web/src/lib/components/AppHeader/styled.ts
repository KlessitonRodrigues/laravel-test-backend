import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Container = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${cssSize(4)};
    padding: ${cssSize(4)} ${cssSize(8)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};
    border-top: none;

    @media (max-width: ${screenSize.laptopS}px) {
      flex-direction: column;
      align-items: flex-start;
      border-radius: 0;
    }
  `,
);
