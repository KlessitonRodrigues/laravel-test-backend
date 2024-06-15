import { LuLocate, LuMapPin } from 'react-icons/lu';

import { Row } from 'src/lib/base/StyledComponents/Flex';

import { Announce, AnnounceDescription, AnnounceImage, Announces, Container } from './styled';

const announces = [
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://th.bing.com/th/id/OIP.uHraHuB3iifFGzxfzcKu8AAAAA?rs=1&pid=ImgDetMain',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://th.bing.com/th/id/OIP.5ZLlFa06uDPSDt_iNJ48BgHaEf?rs=1&pid=ImgDetMain',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures:
      'https://www.inproperty-spain.com/images/new-developments/PROP35/new-smart-home-villas-marbella-exterior-35.jpg',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://th.bing.com/th/id/OIP.XYB-ioeb8AHD9dW9n7IU4QAAAA?rs=1&pid=ImgDetMain',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://i.pinimg.com/originals/ef/58/05/ef5805e70627421b69f68af88a84d65d.jpg',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://i.pinimg.com/originals/04/ec/bd/04ecbd979906d9cf50ec8b3092345616.jpg',
  },
  {
    area: '42',
    location: 'Belém, Pará',
    pictures: 'https://i.pinimg.com/736x/87/e1/dd/87e1ddf59a336bacbcb132fb93fd0ce8.jpg',
  },
];

const AnnounceList = () => {
  return (
    <Container>
      <Announces>
        {announces.map(announce => (
          <Announce>
            <AnnounceImage src={announce.pictures} />
            <AnnounceDescription>
              <Row>
                <Row left>
                  <LuMapPin />
                  {announce.location}
                </Row>
                <Row right>{announce.area} m²</Row>
              </Row>
            </AnnounceDescription>
          </Announce>
        ))}
      </Announces>
    </Container>
  );
};

export default AnnounceList;
