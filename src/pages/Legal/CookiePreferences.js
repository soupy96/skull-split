import { Helmet } from 'react-helmet';

import NestedRoot from '../../components/re-usable/NestedRoot';
import PageTitle from '../../components/re-usable/PageTitle';

import {
  BodyText,
  BoxText,
  GreyLinkWithDots,
  LegalTable,
  MobileTableDiv,
} from '../../components/re-usable/styles/LegalStyles';

function CookiePreferences() {
  return (
    <NestedRoot>
      <Helmet>
        <title>Skull Split | Cookie Preferences</title>
      </Helmet>
      <PageTitle>Cookie Preferences</PageTitle>
      <BodyText>
        <BoxText>
          Cras ultrices auctor tortor a malesuada. Mauris eget metus tempus,
          ullamcorper libero ut, auctor lorem. Duis auctor tempor justo, ut
          vestibulum nisl laoreet quis. Ut non justo vitae augue venenatis
          laoreet eget sit amet erat. Ut consequat congue ex, sed pretium felis
          aliquam nec. Aenean lobortis tortor consequat arcu interdum porttitor.
          Cras lacinia leo at volutpat congue. Sed a mauris nisi. Mauris augue
          lorem, venenatis in metus et, ornare commodo sem. Suspendisse potenti.
        </BoxText>
        <p>
          <b>Vivamus sed ipsum euismod, hendrerit nisi non, eleifend erat.</b>
        </p>
        <p>
          <b>Nulla facilisi.</b>
        </p>
        <p>
          Donec tempor quis mauris dictum porta. Nulla auctor gravida egestas.
          Pellentesque ultricies ipsum in rutrum semper. Aliquam mi eros,
          tristique et mauris eget, placerat fermentum ex. Sed bibendum nisi in
          nibh accumsan, et condimentum orci auctor. In tristique elit id neque
          porttitor venenatis. Mauris ultrices dui ac hendrerit tempus. Aliquam
          sed pulvinar tellus. Sed aliquet interdum arcu non ullamcorper. Nulla
          non sodales leo. Mauris quis venenatis odio. Vestibulum condimentum
          justo et urna volutpat tincidunt. Sed placerat arcu ut risus congue,
          sagittis porta turpis commodo. Phasellus quis tristique mauris.
          Suspendisse lobortis auctor diam ornare commodo. Quisque quis ante
          condimentum, mollis lectus ac, luctus odio.{' '}
        </p>
        <p>Etiam vehicula dui quis ornare sagittis:</p>
        <ul>
          <li>
            Maecenas dui augue: porttitor a fermentum ac, pharetra vel risus.
            Aenean semper, lacus eu laoreet venenatis, est tortor pretium leo,
            id consectetur nisl est ac ante. Suspendisse consequat magna ante, a
            malesuada dolor rutrum a. Duis rhoncus vitae tellus at tempus.{' '}
          </li>
          <li>
            Vestibulum ornare: diam viverra pulvinar vulputate, risus libero
            hendrerit tellus, quis tincidunt dolor quam nec odio. Proin aliquet
            leo fringilla metus sagittis imperdiet. Curabitur in ex et nisl
            luctus ultrices at at libero. Fusce quis accumsan lacus. Aenean
            placerat accumsan magna, ut viverra est interdum vel.{' '}
          </li>
        </ul>
        <hr />
        <p>
          <b>Vivamus sed ipsum euismod, hendrerit nisi non, eleifend erat.</b>
        </p>
        <p>
          Proin massa metus, consectetur eu facilisis quis, imperdiet
          consectetur metus. Sed ipsum quam, laoreet eget orci sit amet,
          pellentesque interdum ipsum. Suspendisse arcu justo, accumsan a nisi
          quis, porta ullamcorper nisi. Duis ac mollis lectus. Pellentesque
          velit felis, rhoncus at auctor non, viverra id dolor. Aliquam erat
          volutpat. Fusce mauris nisi, laoreet ut volutpat a, elementum a ante.{' '}
        </p>
        <hr />
        <p>
          <b>Nullam rutrum fringilla magna, </b>
        </p>
        <p>
          Duis lobortis vulputate turpis, vitae congue massa imperdiet a. Duis
          id odio mollis, malesuada nibh vel, tempor tellus. Proin enim purus,
          placerat id odio eu, dictum suscipit lectus. Aliquam quis blandit
          diam. Pellentesque at lectus augue. Etiam leo dui, hendrerit quis
          dictum sit amet, laoreet ut turpis. Donec ut nibh condimentum, iaculis
          est eu, dictum orci.{' '}
        </p>
        <MobileTableDiv>
          <LegalTable>
            <tbody>
              <tr>
                <td>
                  <b>Porta pulvinar</b>
                </td>
                <td>
                  <b>Hasellus fringilla</b>
                </td>
                <td>
                  <b>Nunc hendrerit</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Proin enim purus, placerat id odio eu</b>
                </td>
                <td>Pellentesque quis metus tellus.</td>
                <td>
                  <GreyLinkWithDots
                    target='_blank'
                    rel='nofollow'
                    href='https://www.amazon.ca/'
                  >
                    https://www.amazon.ca/
                  </GreyLinkWithDots>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Hendrerit sapien mauris ut nisi.</td>
                <td>
                  <GreyLinkWithDots
                    target='_blank'
                    rel='nofollow'
                    href='https://www.facebook.com/'
                  >
                    https://www.facebook.com/
                  </GreyLinkWithDots>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Sed id lorem quis velit</td>
                <td>
                  <GreyLinkWithDots
                    target='_blank'
                    rel='nofollow'
                    href='https://www.google.com/'
                  >
                    https://www.google.com/
                  </GreyLinkWithDots>
                </td>
              </tr>
            </tbody>
          </LegalTable>
        </MobileTableDiv>
      </BodyText>
    </NestedRoot>
  );
}

export default CookiePreferences;
