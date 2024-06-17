import isValidProp from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { AccountProvider } from 'src/hooks/useAccount';
import GlobalCSS from 'src/styles/global';
import { defaultTheme } from 'src/styles/theme';

const AppProviders = (props: PropsWithChildren) => {
  return (
    <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
      <ThemeProvider theme={defaultTheme}>
        <AccountProvider>
          <GlobalCSS />
          {props.children}
        </AccountProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default AppProviders;
