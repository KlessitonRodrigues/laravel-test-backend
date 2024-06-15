import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.div(
  ({ theme }) => css`
    height: 100%;
    width: 100%;
    max-width: ${cssSize(120)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.medium};
  `,
);
