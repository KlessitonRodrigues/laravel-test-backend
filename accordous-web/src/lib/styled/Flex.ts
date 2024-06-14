import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Flex = styled.div<Props.CssProps>(
  ({ gap, w, h, maxw, maxh, responsive, flexwrap, p, m }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(gap ?? 2)};
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
    ${maxw && `max-width: ${maxw};`}
    ${maxh && `max-height: ${maxh};`}
    ${flexwrap && `flex-wrap: wrap;`}
    ${p && `padding: ${p};`}
    ${m && `margin: ${m};`}
    
    @media (max-width: ${screenSize.laptopS}px) {
      width: 100%;
      ${responsive && `gap: ${cssSize((gap ?? 2) * 2)};`}
    }
  `,
);

export const Row = styled(Flex)(
  ({ left, right, top, bottom, flexwrap, responsive }) => css`
    ${left && 'justify-content: flex-start;'}
    ${right && 'justify-content: flex-end;'}
    ${top && 'align-items: flex-start;'}
    ${bottom && 'align-items: flex-end;'}
    ${flexwrap && 'flex-wrap: wrap;'}

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && 'flex-direction: column;'}
      ${responsive && top && 'justify-content: flex-start;'}
      ${responsive && bottom && 'justify-content: flex-end;'}
      ${responsive && left && 'align-items: flex-start;'}
      ${responsive && right && 'align-items: flex-end;'}
    }
  `,
);

export const Column = styled(Flex)(
  ({ left, right, top, bottom }) => css`
    flex-direction: column;
    ${top && 'justify-content: flex-start;'}
    ${bottom && 'justify-content: flex-end;'}
    ${left && 'align-items: flex-start;'}
    ${right && 'align-items: flex-end;'}
  `,
);

export const Grid = styled.div<Props.CssProps>(
  ({ gap, rows, cols }) => css`
    width: 100%;
    display: grid;
    gap: ${cssSize(gap ?? 4)};
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);

    @media (max-width: ${screenSize.laptopM}px) {
      grid-template-columns: 1fr;
    }
  `,
);
