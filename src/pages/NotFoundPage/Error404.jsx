// пока такой вариант, потом погуглю

import { Link } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { Modal } from "../SingInPage/singInPage.styled";

export function Error404() {
  return (
    <Modal>
      Ошибка, такой страницы не существует, вернитесь на{" "}
      <Link to={AppRoutes.HOME}>Главную страницу</Link>
    </Modal>
  );
}
