import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Image = styled.img<Props.CssProps>(
  ({ theme, w, h, m }) => css`
    display: block;
    width: 100%;
    padding: ${cssSize(1)};
    margin: ${m ?? 'auto'};
    max-height: ${h ?? '100%'};
    max-width: ${w ?? 'auto'};
    border-radius: ${theme.border.medium};
    overflow: hidden;
  `,
);

export const BgImage = styled.div<Props.CssProps>(
  ({ src, p, theme }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: ${p};
    color: ${theme.colors.white};
    transition: background-image 1s;
    z-index: 0;

    @media (max-width: ${screenSize.laptopS}px) {
      background-size: cover;
    }
  `,
);

export const BgImageFixed = styled(BgImage)(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    filter: brightness(0.5);
  `,
);
