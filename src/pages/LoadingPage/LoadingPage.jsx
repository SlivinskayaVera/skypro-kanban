import { Modal } from "../SingInPage/singInPage.styled";

export function LoadingPage() {
  return (
    <Modal>
      <h1>Downloading, wait...</h1>
      <img src="../public/images/loading.gif" />
    </Modal>
  );
}
