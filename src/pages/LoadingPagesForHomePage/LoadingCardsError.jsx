import { TextErrorAndLoading } from "../../Components/Common/Common.styled";
import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingCardsError() {
  return (
    <Modal>
      <TextErrorAndLoading>
        Не удалось загрузить данные, попробуйте позже
      </TextErrorAndLoading>
    </Modal>
  );
}
