import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const DefaultTitle = styled.h1<Props.CssProps>(
  ({ size, center }) => css`
    ${size && `font-size: ${cssSize(size)};`}
    ${center && 'text-align: center;'}
  `,
);

export const WhiteTitle = styled(DefaultTitle)(
  ({ theme }) => css`
    color: ${theme.colors.white};
  `,
);

export const MainTitle = styled(DefaultTitle)(
  ({ theme }) => css`
    color: ${theme.colors.white};
  `,
);

export const DefaultText = styled.p<Props.CssProps>(
  ({ size, center }) => css`
    ${size && `font-size: ${cssSize(size)};`}
    ${center && 'text-align: center;'}
  `,
);

export const WhiteText = styled(DefaultText)(
  ({ theme }) => css`
    color: ${theme.colors.white};
  `,
);

export const MainText = styled(DefaultText)(
  ({ theme }) => css`
    color: ${theme.colors.white};
  `,
);
