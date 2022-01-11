import { Year } from "../helpers/helpers";
import * as styled from "./Styled";

export default function Footer() {
  return (
    <styled.Wrapper data-testid="footer-wrapper" id="footer-wrapper">
      <styled.FooterNav/>
      <styled.Footer>&copy; {Year()} Shop &amp; Buy Stuff</styled.Footer>
    </styled.Wrapper>
  );
}
