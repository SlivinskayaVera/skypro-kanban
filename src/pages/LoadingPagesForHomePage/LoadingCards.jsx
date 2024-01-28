import { Image, TextErrorAndLoading } from "../../Components/Common/Common.styled";
import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingCards() {
  return (
    <Modal>
      <Image src="../public/images/zhdun.png" />
      <TextErrorAndLoading>Downloading tasks, wait...</TextErrorAndLoading>
    </Modal>
  );
}