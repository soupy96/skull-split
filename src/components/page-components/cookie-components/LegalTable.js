import {
  GreyLinkWithDots,
  LegalTableTable,
} from '../../re-usable/styles/LegalStyles';

function LegalTable() {
  return (
    <LegalTableTable>
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
    </LegalTableTable>
  );
}

export default LegalTable;
