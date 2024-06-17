import { useEffect, useState } from 'react';

import Modal from 'src/lib/base/Modal';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import AppHeader from 'src/lib/components/AppHeader';
import Page from 'src/lib/components/Page';
import PropertyFilters from 'src/lib/components/PropertyFilters';
import PropertyList from 'src/lib/components/PropertyList';
import AnnounceForm from 'src/lib/forms/Announce';
import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { notify } from 'src/utils/notify';

const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(false);
  const [properties, setProperties] = useState<Models.Property[]>([]);

  const onCreateProperty = (form: Forms.Property) => {
    setLoading(true);
    apiClient
      .post(apiRoutes.property, form)
      .then(() => {
        notify.success('New property created successfully');
      })
      .finally(() => {
        setLoading(false);
        setShowAnnounce(false);
      });
  };

  useEffect(() => {
    const load = async () => {
      apiClient.get(apiRoutes.properties).then(res => {
        if (res.data.properties) setProperties(res.data.properties);
      });
    };
    load();
  }, [isLoading]);

  return (
    <Page loading={isLoading}>
      <AppHeader onCreateAnnounce={() => setShowAnnounce(!showAnnounce)} />
      <Row responsive m="2rem 0 0" top>
        <PropertyList list={properties} />
        <PropertyFilters />
      </Row>
      <Modal
        title="Create a new property"
        show={showAnnounce}
        onClose={() => setShowAnnounce(!showAnnounce)}
      >
        <AnnounceForm onSubmit={onCreateProperty} />
      </Modal>
    </Page>
  );
};

export default HomePage;
