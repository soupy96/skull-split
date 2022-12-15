import PlayNowButt from '../../re-usable/navbar/PlayNowButt';

import {
  ContactH2,
  ContactInfoBox,
} from '../../re-usable/styles/ContentStyles';

function ContactInfo() {
  const testing = (e) => {
    alert(
      'This would take you to the companies Google My Business Page to leave a review.'
    );
  };

  return (
    <ContactInfoBox>
      <ContactH2>Skull Split</ContactH2>
      <a
        href='https://goo.gl/maps/Hu9fywiQtmeNL81w5'
        target='_blank'
        rel='noreferrer'
      >
        123 Sesame Street
        <br />
        New York, NY
        <br />
        USA
      </a>
      <a href='tel:18008888888'>1-800-888-8888</a>
      <PlayNowButt onClick={testing} href='#'>
        Leave a Review
      </PlayNowButt>
    </ContactInfoBox>
  );
}

export default ContactInfo;
