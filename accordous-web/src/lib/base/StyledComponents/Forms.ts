import styled, { css } from 'styled-components';

import { animations, cssSize, screenSize } from 'src/styles/utils';

export const Form = styled.form<Props.CssProps>(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 100%;
    max-width: ${cssSize(110)};
    padding: ${cssSize(6)} ${cssSize(2)};
    gap: ${cssSize(8)};
    animation: ${animations.fadeIn} 1s;

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
    }
  `,
);

export const FormLarge = styled(Form)(
  () => css`
    max-width: ${cssSize(300)};
  `,
);
