import styled from 'styled-components';

function NestedRoot(props) {
  return <NestedStyle>{props.children}</NestedStyle>;
}

export const NestedStyle = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;

  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`;

export default NestedRoot;
