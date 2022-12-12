import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import ContactSection from '../components/page-components/contact-components/ContactSection';

import { NestedRootOther } from '../components/re-usable/NestedRoot';
// import styled from 'styled-components';

function Contact() {
  return (
    // TODO: use https://formik.org/ to create the form on the right side
    <NestedRootOther>
      <Helmet>
        <title>Skull Split | Contact</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      {/* <Text>Contact page is in progress</Text> */}
      <ContactSection />
    </NestedRootOther>
  );
}

// const Text = styled.p`
//   text-align: center;
//   margin: 25% 0px;
// `;

export default Contact;
