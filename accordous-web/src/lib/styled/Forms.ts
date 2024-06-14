import styled, { css } from 'styled-components';

import { animations, cssSize, screenSize } from 'src/styles/utils';

export const Form = styled.form<Props.CssProps>(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: ${cssSize(10)};
    padding: ${cssSize(6)} ${cssSize(2)};
    width: ${cssSize(110)};
    animation: ${animations.fadeIn} 1s;

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
    }
  `,
);

export const FormLarge = styled(Form)(
  () => css`
    width: ${cssSize(300)};
  `,
);
