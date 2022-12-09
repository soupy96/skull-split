import { Helmet } from 'react-helmet';

import NestedRoot from '../../components/re-usable/NestedRoot';
import PageTitle from '../../components/re-usable/PageTitle';
import {
  BodyText,
  ListStyleAplha,
  ListStyleRomanNum,
  UpperText,
} from '../../assets/css/LegalStyles';

function TermsOfService() {
  return (
    <NestedRoot>
      <Helmet>
        <title>Skull Split | Terms Of Service</title>
      </Helmet>
      <PageTitle>Terms of Service</PageTitle>
      <BodyText>
        <p>
          <b>Dec 9, 2022</b>
        </p>
        <UpperText>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Suspendisse sit amet arcu ac arcu ullamcorper egestas vel sodales
          nibh. Aenean pellentesque orci scelerisque pellentesque imperdiet.
          Phasellus lacinia fringilla elementum. Maecenas eget massa ornare,
          dapibus tortor a, mollis nibh. In iaculis porta ligula, et facilisis
          quam volutpat id. Suspendisse potenti. Curabitur vitae pulvinar est.
          Maecenas pulvinar, est vel faucibus dictum, metus risus ultrices
          purus, at tristique mauris magna quis dolor. Praesent vel lectus
          vehicula, facilisis massa a, fermentum justo. Suspendisse sagittis mi
          ut urna fringilla dapibus. Vestibulum convallis rutrum felis, sed
          imperdiet magna ullamcorper eget. Aliquam placerat scelerisque orci,
          vitae posuere ante tristique in.
        </UpperText>
        <p>
          Donec nec mauris mauris. Aliquam consectetur pellentesque risus, sed
          euismod turpis egestas porta. Curabitur sit amet tincidunt augue.
          Morbi faucibus leo quis velit hendrerit, sed porta risus cursus. Donec
          eu purus id velit aliquet pulvinar ut vel erat. Donec dignissim eros
          et facilisis vestibulum. Praesent sit amet rhoncus ipsum. Morbi
          convallis quam ac risus pellentesque laoreet. Vivamus dignissim orci
          et justo vestibulum, id egestas felis scelerisque. Proin ac semper
          lacus, eu fringilla dui. Mauris id dictum leo, id vestibulum odio.{' '}
        </p>
        <hr />
        <UpperText>
          <b>1. Eligibility</b>
        </UpperText>
        <ListStyleAplha>
          <li>
            Fusce maximus, arcu vel ullamcorper lacinia, orci lectus tempus
            magna, sit amet imperdiet leo enim a tortor. Etiam a cursus sem.
          </li>
          <p>
            Donec eu purus id velit aliquet pulvinar ut vel erat. Donec
            dignissim eros et facilisis vestibulum. Praesent sit amet rhoncus
            ipsum.
          </p>
          <li>
            Maecenas luctus vestibulum ante, ac maximus mi elementum id. Donec
            aliquet hendrerit mollis. Praesent eleifend nulla nisl, nec mollis
            lectus fringilla at.
          </li>
          <p>
            Vestibulum placerat felis in neque pretium, in sagittis massa
            sagittis. Nulla leo eros, semper id mi sed, gravida porttitor diam.
            Morbi eu aliquet nisi, dapibus placerat urna.
          </p>
          <li>
            Phasellus vitae augue a justo finibus sodales nec quis odio. Aenean
            et nulla risus. Praesent tincidunt suscipit risus in tempor. Nulla
            elementum sed dolor at auctor. Pellentesque egestas non lacus at
            consequat. Aliquam imperdiet dapibus massa. Vivamus eget ex
            vestibulum, fringilla tellus in, aliquam eros. Nullam eu luctus
            risus, a porta mi. Morbi vulputate arcu quis est pharetra, nec
            efficitur elit auctor. Vestibulum id porta lorem
          </li>
          <ListStyleRomanNum>
            <li>
              Vestibulum ut nulla magna. Fusce vestibulum augue ligula, dictum
              efficitur nunc placerat et. In hac habitasse platea dictumst.
              Vestibulum iaculis velit sit amet lectus venenatis, ut semper odio
              dignissim.
            </li>
            <li>
              Ut vitae mauris eu massa mollis consequat. Nunc varius sit amet
              arcu ut pretium. Sed et semper lorem, interdum interdum velit.
              Quisque ultricies fermentum viverra. Vivamus volutpat mattis
              vulputate. Cras diam leo, aliquam ut nunc eu, placerat maximus
              orci.
            </li>
            <li>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce augue dui, pulvinar sed
              metus eget, placerat efficitur massa. Aenean vulputate, mauris id
              sagittis venenatis, augue magna faucibus lacus, ut mattis risus
              odio ut libero. Morbi porttitor lobortis tortor, non gravida leo
              consequat at. Integer hendrerit elit finibus, vehicula quam eget,
              ornare turpis.
            </li>
          </ListStyleRomanNum>
        </ListStyleAplha>
        <hr />
        <UpperText>
          <b>
            Etiam vehicula dui quis ornare sagittis. Maecenas semper lorem id
            nunc sodales, nec fermentum lacus venenatis. In hac habitasse platea
            dictumst. Mauris nunc eros, gravida a nibh a, mattis feugiat erat.
            Donec rutrum orci ac tortor tempor, ac auctor purus tempus. In
            cursus quam ac libero suscipit mollis. Quisque non elementum justo.
            Nam dictum dolor ac nulla venenatis, ultricies tristique nisi
            ornare. Maecenas dui augue, porttitor a fermentum ac, pharetra vel
            risus. Aenean semper, lacus eu laoreet venenatis, est tortor pretium
            leo, id consectetur nisl est ac ante. Suspendisse consequat magna
            ante, a malesuada dolor rutrum a. Duis rhoncus vitae tellus at
            tempus.{' '}
          </b>
        </UpperText>
      </BodyText>
    </NestedRoot>
  );
}

export default TermsOfService;
