import { useMemo } from 'react';
import { LuMap, LuMapPin, LuPhone, LuTrash, LuTrash2 } from 'react-icons/lu';

import { DangerButton, MainButton, OutlineButton } from 'src/lib/base/StyledComponents/Buttons';
import { Row } from 'src/lib/base/StyledComponents/Flex';
import { DefaultText } from 'src/lib/base/StyledComponents/typography';

import { Announce, AnnounceDescription, AnnounceImage, Announces, Container } from './styled';

const fakeImages = [
  'https://th.bing.com/th/id/OIP.uHraHuB3iifFGzxfzcKu8AAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.5ZLlFa06uDPSDt_iNJ48BgHaEf?rs=1&pid=ImgDetMain',
  'https://www.inproperty-spain.com/images/new-developments/PROP35/new-smart-home-villas-marbella-exterior-35.jpg',
  'https://th.bing.com/th/id/OIP.XYB-ioeb8AHD9dW9n7IU4QAAAA?rs=1&pid=ImgDetMai',
  'https://i.pinimg.com/originals/04/ec/bd/04ecbd979906d9cf50ec8b3092345616.jpg',
  'https://i.pinimg.com/736x/87/e1/dd/87e1ddf59a336bacbcb132fb93fd0ce8.jpg',
];

const PropertyList = (props: Props.PropertyList) => {
  const { list, onContract, onDelete } = props;

  const properties = useMemo(() => {
    return list.map((property, i) => {
      const { id, area, city, state, street, price, phone, contractId } = property;
      return (
        <Announce key={id}>
          <AnnounceImage src={fakeImages[i % fakeImages.length]} />
          <AnnounceDescription>
            <Row left>
              <LuMapPin size={16} />
              <DefaultText size={4.5}>{`${state}, ${city}, ${street}`}</DefaultText>
            </Row>
            <Row left>
              <LuPhone size={16} />
              {phone}
            </Row>
            <Row>
              <Row left>
                <LuMap size={16} />
                <DefaultText size={6}>{area} m²</DefaultText>
              </Row>
              <Row right>
                <DefaultText size={7.5}>
                  <b>{price} $RS</b>
                </DefaultText>
              </Row>
            </Row>
            <Row>
              <MainButton
                w="100%"
                disabled={!!contractId}
                onClick={() => onContract && onContract(property)}
              >
                {!!contractId ? 'Contratado' : 'Contratar'}
              </MainButton>
              <DangerButton w="fit-content" onClick={() => onDelete && onDelete(property)}>
                <LuTrash2 size={18} />
              </DangerButton>
            </Row>
          </AnnounceDescription>
        </Announce>
      );
    });
  }, [list.length, onContract]);

  return (
    <Container>
      <Announces>{properties}</Announces>
    </Container>
  );
};

export default PropertyList;
