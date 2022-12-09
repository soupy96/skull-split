import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Contact</title>
      </Helmet>
      <Text>Contact Page in Progress</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default Contact;
