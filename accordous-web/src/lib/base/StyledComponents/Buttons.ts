import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Button = styled.button<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${cssSize(2)};
    padding: 0 ${cssSize(6)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    transition: 0.2s;
    min-height: ${cssSize(12)};
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      background-color: ${theme.colors.gray};
    }
  `,
);

export const MainButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    border: none;
  `,
);

export const DangerButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.mainText};
    border: none;
  `,
);

export const OutlineButton = styled(Button)(
  ({ theme, w }) => css`
    width: ${w ?? '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(2)};
    color: ${theme.colors.text1};
    box-shadow: none;
    cursor: pointer;

    &:disabled {
      background-color: transparent;
      color: ${theme.colors.text3};
    }
  `,
);
