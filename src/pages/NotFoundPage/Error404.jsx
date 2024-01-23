// пока такой вариант, потом погуглю

import { Link } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { Modal } from "../SingInPage/singInPage.styled";
import { TextErrorAndLoading, Image } from "../../Components/Common/Common.styled";

export default function Error404() {
  return (
    <Modal>
      <Image src="../../../public/images/404.png" />
      <TextErrorAndLoading>
        Ошибка, такой страницы не существует, <br /> вернитесь на{" "}
        <Link to={AppRoutes.HOME}>Главную страницу</Link>
      </TextErrorAndLoading>
    </Modal>
  );
}

