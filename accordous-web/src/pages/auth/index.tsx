import { useEffect, useState } from 'react';

import If from 'src/lib/base/If';
import Page from 'src/lib/components/Page';
import { VerifyCodeForm } from 'src/lib/forms/VerifyCode';
import { SignInForm } from 'src/lib/forms/signIn';
import { SignUpForm } from 'src/lib/forms/signUp';
import { Button } from 'src/lib/styled/Buttons';
import { Card, Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { BgImageFixed, Image } from 'src/lib/styled/Images';
import { WhiteText, WhiteTitle } from 'src/lib/styled/typography';
import house1 from 'src/public/images/house1.png';
import house2 from 'src/public/images/house2.jpg';
import house3 from 'src/public/images/house3.jpg';
import logoTitle from 'src/public/images/logoTitle.png';
import { authDescriptions } from 'src/utils/constants/sections';

const bgImages = [house1, house2, house3];

const AuthPage = () => {
  const [authForm, setForm] = useState(0);
  const [section, setSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (section < authDescriptions.length - 1) setSection(section + 1);
      else setSection(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, [section]);

  return (
    <Page>
      <Section>
        <Image w="14rem" m="0" src={logoTitle} />
        <Row responsive m="8rem 0" gap={12}>
          <Column key={section} className="delay-items" top left gap={10} h="20rem">
            <WhiteTitle size={12}>{authDescriptions[section].title}</WhiteTitle>
            <WhiteText size={6}>{authDescriptions[section].description}</WhiteText>
            <WhiteText size={6}>{authDescriptions[section].description2}</WhiteText>
          </Column>
          <Column gap={10}>
            <Card w="fit-content">
              <If check={authForm == 0} true={<SignInForm />} />
              <If check={authForm == 1} true={<SignUpForm />} />
              <If check={authForm == 2} true={<VerifyCodeForm />} />
            </Card>
            <If
              check={authForm == 0}
              true={<Button onClick={() => setForm(1)}>Create your Account</Button>}
            />
            <If
              check={authForm == 1}
              true={<Button onClick={() => setForm(0)}>Login with your Account</Button>}
            />
          </Column>
        </Row>
      </Section>
      <BgImageFixed src={bgImages[section]} />
    </Page>
  );
};

export default AuthPage;
