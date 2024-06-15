import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Container = styled.div(
  () => css`
    width: 100%;
  `,
);

export const Announces = styled.div(
  () => css`
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${cssSize(6)};
    padding: 0 ${cssSize(6)};

    @media (max-width: ${screenSize.desktopS}px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${screenSize.tablet}px) {
      grid-template-columns: 1fr;
    }
  `,
);

export const Announce = styled.div(
  ({ theme }) => css`
    width: ${cssSize(100)};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.small};
  `,
);

export const AnnounceImage = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    width: 100%;
    height: ${cssSize(90)};
    border-radius: ${theme.radius.small} ${theme.radius.small} 0 0;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
  `,
);

export const AnnounceDescription = styled.div(
  ({ theme }) => css`
    height: ${cssSize(30)};
    padding: ${cssSize(4)};
    font-size: ${theme.fontSize.small};
  `,
);
