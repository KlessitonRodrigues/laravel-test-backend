import { useEffect, useState } from 'react';

import Modal from 'src/lib/base/Modal';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import AppHeader from 'src/lib/components/AppHeader';
import Page from 'src/lib/components/Page';
import PropertyFilters from 'src/lib/components/PropertyFilters';
import PropertyList from 'src/lib/components/PropertyList';
import AnnounceForm from 'src/lib/forms/Announce';
import PropertyContractForm from 'src/lib/forms/PropertyContract';
import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { notify } from 'src/utils/notify';

const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Models.Property[]>([]);
  const [showProperty, setShowProperty] = useState(false);
  const [propertyToContract, setPropertyToContract] = useState<Models.Property>();

  const loadItems = async () => {
    setLoading(true);
    apiClient
      .get(apiRoutes.properties)
      .then(res => res.data.properties && setProperties(res.data.properties))
      .finally(() => setLoading(false));
  };

  const onCreateProperty = (form: Forms.Property) => {
    setLoading(true);
    setShowProperty(false);
    apiClient
      .post(apiRoutes.property, form)
      .then(() => {
        notify.success('New property created successfully');
        loadItems();
      })
      .finally(() => setLoading(false));
  };

  const onCreatePropertyContract = (form: Forms.PropertyContract) => {
    setLoading(true);
    setShowProperty(false);
    const data = { propertyId: propertyToContract?.id, contract: form };
    apiClient
      .post(apiRoutes.propertyContract, data)
      .then(() => {
        notify.success('New property contract created successfully');
        loadItems();
      })
      .finally(() => setLoading(false));
  };

  const onDeleteProperty = (property: Models.Property) => {
    setLoading(true);
    setShowProperty(false);
    apiClient
      .delete(apiRoutes.property + property.id)
      .then(() => {
        notify.success('Property was removed successfully');
        loadItems();
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <Page loading={isLoading}>
      <AppHeader onCreateAnnounce={() => setShowProperty(!showProperty)} />

      <Row responsive m="2rem 0 0" top>
        <PropertyList
          list={properties}
          onContract={property => setPropertyToContract(property)}
          onDelete={onDeleteProperty}
        />
        <PropertyFilters />
      </Row>

      <Modal
        title="Create a new property"
        show={showProperty}
        onClose={() => setShowProperty(!showProperty)}
      >
        <AnnounceForm onSubmit={onCreateProperty} />
      </Modal>
      <Modal
        title="Contract a property"
        show={!!propertyToContract}
        onClose={() => setPropertyToContract(undefined)}
      >
        <PropertyContractForm onSubmit={onCreatePropertyContract} />
      </Modal>
    </Page>
  );
};

export default HomePage;
