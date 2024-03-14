import {
  Image,
  TextErrorAndLoading,
} from "../../Components/Common/Common.styled";
import { ThemeHook } from "../../hooks/useThemeHook";

import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingCards() {
  const { changeTheme } = ThemeHook();
  return (
    <Modal>
      <Image src="/images/zhdun.png" />
      <TextErrorAndLoading $changeTheme={changeTheme}>
        Downloading tasks, wait...
      </TextErrorAndLoading>
    </Modal>
  );
}
