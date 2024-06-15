import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Section = styled.section(
  ({ theme }) => css`
    margin: ${cssSize(4)};
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text2};
  `,
);

export const Card = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(6)};
    padding: ${cssSize(8)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.small};
    transition: 0.3s;
    width: ${w ?? '100%'};

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);

export const Box = styled.div<Props.CssProps>(
  ({ theme, w, maxw, responsive }) => css`
    width: ${w ?? '100%'};
    max-width: ${maxw ?? '100%'};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${cssSize(2)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && 'max-width: 100%;'}
    }
  `,
);
