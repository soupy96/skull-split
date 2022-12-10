import { Helmet } from 'react-helmet';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import { BodyText } from '../components/re-usable/styles/LegalStyles';
import {
  ContactForm,
  ContactInfo,
  TwoBoxRow,
} from '../components/re-usable/styles/ContentStyles';

function Contact() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>CoderGuides | Contact</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      <BodyText>
        <TwoBoxRow>
          <ContactInfo></ContactInfo>
          <ContactForm></ContactForm>
        </TwoBoxRow>
      </BodyText>
    </NestedRootOther>
  );
}

export default Contact;
