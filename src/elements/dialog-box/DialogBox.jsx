import * as styled from "./Styled";

export default function DialogBox() {
  return (
    <styled.Overlay data-testid="dialog-box-wrapper">
      <styled.Wrapper>
        <styled.TitleBar type="info">
          <styled.CloseButton
            // onClick={() => app.setPopup({ show: false })}
          >
            x
          </styled.CloseButton>
          <styled.Title>{/* {app.popup.title} */}</styled.Title>
        </styled.TitleBar>
        <styled.Content>{/* {app.popup.message} */}</styled.Content>
        <styled.LineAnimation>
          <div className="bar" />
        </styled.LineAnimation>
        <styled.Okay
          // onClick={() => app.setPopup({ show: false })}
        >
          OK
        </styled.Okay>
      </styled.Wrapper>
    </styled.Overlay>
  );
}
