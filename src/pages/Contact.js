import { Helmet } from 'react-helmet';

import NestedRoot from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import { BodyText } from '../components/re-usable/styles/LegalStyles';
import {
  ContactForm,
  ContactInfo,
  TwoBoxRow,
} from '../components/re-usable/styles/ContentStyles';

function Contact() {
  return (
    <NestedRoot>
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
    </NestedRoot>
  );
}

export default Contact;
