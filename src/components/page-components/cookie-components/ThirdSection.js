import LegalTable from '../../page-components/cookie-components/LegalTable';

import { MobileTableDiv } from '../../re-usable/styles/LegalStyles';

function ThirdSection() {
  return (
    <div>
      <p>
        <b>Nullam rutrum fringilla magna, </b>
      </p>
      <p>
        Duis lobortis vulputate turpis, vitae congue massa imperdiet a. Duis id
        odio mollis, malesuada nibh vel, tempor tellus. Proin enim purus,
        placerat id odio eu, dictum suscipit lectus. Aliquam quis blandit diam.
        Pellentesque at lectus augue. Etiam leo dui, hendrerit quis dictum sit
        amet, laoreet ut turpis. Donec ut nibh condimentum, iaculis est eu,
        dictum orci.
      </p>
      <MobileTableDiv>
        <LegalTable />
      </MobileTableDiv>
    </div>
  );
}

export default ThirdSection;
