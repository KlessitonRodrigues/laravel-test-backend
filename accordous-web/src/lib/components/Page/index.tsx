import { useEffect } from 'react';

import { PageContainer, PageContent } from './styled';

const Page = (props: Props.Page) => {
  const { children, fullScreen } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer fullscreen={!!fullScreen}>
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Page;
