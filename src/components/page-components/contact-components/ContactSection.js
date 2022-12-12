import { TwoBoxRow } from '../../re-usable/styles/ContentStyles';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <TwoBoxRow>
      <ContactInfo />
      <ContactForm />
    </TwoBoxRow>
  );
}

export default ContactSection;
