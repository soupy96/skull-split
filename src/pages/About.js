import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>Skull Split | About</title>
      </Helmet>
      <Text>About Page in Progress</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default About;
