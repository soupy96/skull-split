import { Helmet } from 'react-helmet';

import PageTitle from '../../components/re-usable/PageTitle';
import NestedRoot from '../../components/re-usable/NestedRoot';

import {
  BodyText,
  GreyLinkWithDots,
  MainPrivacyPointsBox,
} from '../../components/re-usable/styles/LegalStyles';

function PrivacyNotice() {
  return (
    // TODO: have the text styles reusable in all pages except the landing page
    <NestedRoot>
      <Helmet>
        <title>Skull Split | Privacy Notice</title>
      </Helmet>
      <PageTitle id='top'>Privacy Notice</PageTitle>
      <BodyText>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum hendrerit velit id rutrum. Proin ut lacinia nisl. Vivamus
            vulputate sagittis nisl, non tincidunt quam dictum sit amet.
          </b>
        </p>
        <p>
          Sed at aliquet neque. In eget diam a orci pellentesque vulputate id
          vitae est. Maecenas faucibus lacinia nibh ac bibendum. Integer vel
          lacus urna. Aenean vitae lectus sodales ligula consequat posuere vitae
          nec mauris. In vel imperdiet augue. <b>Aliquam</b> eu elit vel purus
          dapibus facilisis ac eu orci. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras sodales, elit commodo rhoncus euismod, mi orci
          ornare neque, sed maximus arcu tortor mattis arcu. Morbi dictum nulla
          id leo blandit luctus. Praesent a ullamcorper velit. Nunc sed elit non
          nisl sollicitudin malesuada ut et mauris. Nunc eu blandit quam. Ut
          ornare elit vel quam varius maximus. Aliquam venenatis sed velit ac
          sodales.
        </p>
        <p>Nunc fermentum luctus elementum:</p>
        <ul>
          <li>Aenean</li>
          <li>Vestibulum</li>
          <li>Nulla</li>
        </ul>
        <p>
          Aenean vel nisi dapibus, euismod velit a, feugiat mi. Pellentesque ac
          tortor ac enim egestas dignissim a ac neque. Vestibulum ultricies
          dapibus augue, sed tempus enim laoreet sed. Maecenas blandit euismod
          aliquam. Nulla facilisis tellus eget nunc pretium dignissim. Donec
          tristique massa at tortor lacinia, a maximus urna consequat. Etiam
          auctor tortor at aliquet malesuada. Donec sem risus, ultricies nec
          libero id, euismod mattis turpis. Maecenas lobortis dignissim
          fringilla. Aliquam in elit at nunc mattis imperdiet in eu nisl. Morbi
          ut pretium mi. Sed aliquet, turpis eu elementum sagittis, justo turpis
          consequat magna, vitae mollis mauris nibh et massa. Mauris viverra
          scelerisque sapien. Proin convallis mi pulvinar consequat feugiat.
          Etiam consectetur quam ligula, iaculis fermentum erat pharetra sed.
        </p>
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
        <MainPrivacyPointsBox>
          <li id='test1'>
            <div>
              <p>
                <b>Integer semper mauris non ante porta finibus.</b>
                <p>Vestibulum lectus nulla, viverra nec turpis in:</p>
                <ul>
                  <li>Cras sodales, elit commodo rhoncus euismod</li>
                  <li>Suspendisse commodo porttitor bibendum</li>
                </ul>
              </p>
              <p>
                Vestibulum sollicitudin neque vitae ex lacinia sagittis.
                Phasellus vel efficitur ante. Quisque blandit consectetur justo
                id ultricies. Nulla volutpat tortor non ipsum semper, nec
                sodales sem maximus. Sed fringilla sagittis gravida. Suspendisse
                sapien elit, gravida in accumsan ac, interdum ac ligula. Sed vel
                fermentum turpis. Suspendisse potenti. Suspendisse vel magna
                lacinia, ultrices tellus ut, pellentesque lectus. Cras in
                blandit risus. Suspendisse porttitor risus sit amet neque
                laoreet ultricies. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Praesent in nunc sit amet urna viverra
                convallis et quis urna. Maecenas eu bibendum tortor. Donec
                volutpat dapibus augue a dignissim.
              </p>
            </div>
            <div>
              <GreyLinkWithDots href='#top'>Back to Top</GreyLinkWithDots>
            </div>
          </li>
          <hr />
          <li id='test2'>
            <div>
              <p>
                <b>Duis a dictum enim.</b>
              </p>
              <p>
                Duis a dictum enim. Ut laoreet eleifend tincidunt. Ut blandit
                nec dui et mattis. Proin nec ipsum massa. Suspendisse rhoncus
                massa a rutrum iaculis. Fusce metus enim, malesuada id erat sed,
                placerat ullamcorper lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Nullam ut quam placerat, ullamcorper nisi non, mollis erat.
                Proin dignissim sapien et orci sagittis, vel dapibus purus
                consectetur. Cras viverra eleifend sapien, at scelerisque ante
                elementum nec. Aliquam erat volutpat.
              </p>
            </div>
            <div>
              <GreyLinkWithDots href='#top'>Back to Top</GreyLinkWithDots>
            </div>
          </li>
          <hr />
          <li id='test3'>
            <div>
              <p>
                <b>Nullam mattis luctus vulputate.</b>
              </p>
              <p>
                Nullam mattis luctus vulputate. Cras imperdiet arcu non bibendum
                rutrum. Quisque finibus lectus in sem elementum, sit amet
                dignissim lectus ultrices. Nam tempus vitae arcu sit amet
                rutrum. Aliquam ligula metus, volutpat in eros eu, suscipit
                vulputate turpis. Vivamus neque turpis, vehicula ac mauris sed,
                sodales mollis urna. Vestibulum fringilla ex neque, eleifend
                venenatis libero dictum et. Integer in justo tincidunt, sodales
                orci eu, laoreet mi. Praesent ultrices metus lacus, sit amet
                rutrum sem suscipit vel. Nulla quis eros mollis, finibus enim
                posuere, facilisis tellus.
              </p>
              <p>
                Duis a dictum enim. Ut laoreet eleifend tincidunt. Ut blandit
                nec dui et mattis. Proin nec ipsum massa. Suspendisse rhoncus
                massa a rutrum iaculis. Fusce metus enim, malesuada id erat sed,
                placerat ullamcorper lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Nullam ut quam placerat, ullamcorper nisi non, mollis erat.
                Proin dignissim sapien et orci sagittis, vel dapibus purus
                consectetur. Cras viverra eleifend sapien, at scelerisque ante
                elementum nec. Aliquam erat volutpat.
              </p>
            </div>
            <div>
              <GreyLinkWithDots href='#top'>Back to Top</GreyLinkWithDots>
            </div>
          </li>
        </MainPrivacyPointsBox>
      </BodyText>
    </NestedRoot>
  );
}

export default PrivacyNotice;
