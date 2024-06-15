import Modal from 'src/lib/base/Modal';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import AnnounceFilters from 'src/lib/components/AnnouceFilters';
import AnnounceList from 'src/lib/components/AnnounceList';
import AppHeader from 'src/lib/components/AppHeader';
import Page from 'src/lib/components/Page';
import AnnounceForm from 'src/lib/forms/Announce';

const HomePage = () => {
  return (
    <Page>
      <AppHeader />
      <Row responsive m="2rem 0 0" top>
        <AnnounceList />
        <AnnounceFilters />
      </Row>
      <Modal show title="Create a new Announce">
        <AnnounceForm />
      </Modal>
    </Page>
  );
};

export default HomePage;
