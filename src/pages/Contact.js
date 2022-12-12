import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import ContactSection from '../components/page-components/contact-components/ContactSection';

import { NestedRootOther } from '../components/re-usable/NestedRoot';

function Contact() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | Contact</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      <ContactSection />
    </NestedRootOther>
  );
}

export default Contact;
