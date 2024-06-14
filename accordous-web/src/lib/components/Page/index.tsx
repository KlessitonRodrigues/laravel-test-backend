import { useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Loading from 'src/lib/base/Loading';

import { PageContainer, PageContent } from './styled';

const Page = (props: Props.Page) => {
  const { children, fullScreen, loading } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer fullscreen={!!fullScreen}>
      <ReactNotifications className="notify-box" />
      <Loading show={!!loading} type="fullScreen" />
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Page;
