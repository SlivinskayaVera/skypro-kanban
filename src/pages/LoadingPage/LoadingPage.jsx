import { TextErrorAndLoading, Image } from "../../Components/Common/Common.styled";
import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingPage() {
  return (
    <Modal>
      <Image src="/images/zhdun.png" />
      <TextErrorAndLoading>Downloading, wait...</TextErrorAndLoading>
    </Modal>
  );
}
