import { GreyLinkWithDots } from '../../re-usable/styles/LegalStyles';

function TableOfContents() {
  return (
    <div>
      <p>
        <b>Table of Contents</b>
      </p>
      <p>
        <GreyLinkWithDots href='#test1'>
          1. Integer semper mauris non ante porta finibus.
        </GreyLinkWithDots>
      </p>
      <p>
        <GreyLinkWithDots href='#test2'>
          2. Quisque blandit consectetur justo id ultricies.
        </GreyLinkWithDots>
      </p>
      <p>
        <GreyLinkWithDots href='#test3'>
          3. Praesent a ullamcorper velit.
        </GreyLinkWithDots>
      </p>
      <hr />
    </div>
  );
}

export default TableOfContents;
