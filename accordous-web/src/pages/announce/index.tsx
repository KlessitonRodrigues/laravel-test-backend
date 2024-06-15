import AppHeader from 'src/lib/components/AppHeader';
import Page from 'src/lib/components/Page';
import AnnounceForm from 'src/lib/forms/Announce';

const AnnouncePage = () => {
  return (
    <Page>
      <AppHeader />
      <AnnounceForm />
    </Page>
  );
};

export default AnnouncePage;
