import { TextErrorAndLoading } from "../../Components/Common/Common.styled";
import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingCards() {
  return (
    <Modal>
      <TextErrorAndLoading>Downloading tasks, wait...</TextErrorAndLoading>
    </Modal>
  );
}