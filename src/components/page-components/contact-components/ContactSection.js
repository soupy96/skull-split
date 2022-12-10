import {
  ContactFormBox,
  ContactInfoBox,
  TwoBoxRow,
} from '../../re-usable/styles/ContentStyles';

function ContactSection() {
  return (
    <TwoBoxRow>
      <ContactInfoBox />
      <ContactFormBox />
    </TwoBoxRow>
  );
}

export default ContactSection;
