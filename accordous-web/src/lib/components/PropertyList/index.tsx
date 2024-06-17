import { useMemo } from 'react';
import { LuMapPin } from 'react-icons/lu';

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
  const { list } = props;

  const properties = useMemo(() => {
    return list.map((property, i) => {
      const { id, area, city, state, street } = property;
      return (
        <Announce key={id}>
          <AnnounceImage src={fakeImages[i % fakeImages.length]} />
          <AnnounceDescription>
            <Row>
              <Row left>
                <LuMapPin />
                {state}
              </Row>
              <Row right>{area} m²</Row>
            </Row>
            <DefaultText size={5}>{`${city}, ${street}`}</DefaultText>
          </AnnounceDescription>
        </Announce>
      );
    });
  }, [list.length]);

  return (
    <Container>
      <Announces>{properties}</Announces>
    </Container>
  );
};

export default PropertyList;
