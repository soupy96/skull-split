import { Helmet } from 'react-helmet';

import NestedRoot from '../components/re-usable/NestedRoot';
import PageTitle from '../components/re-usable/PageTitle';

import { BodyText } from '../assets/css/LegalStyles';
import {
  ContactForm,
  ContactInfo,
  TwoBoxRow,
} from '../assets/css/ContentStyles';

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
