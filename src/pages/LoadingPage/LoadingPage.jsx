import {
  TextErrorAndLoading,
  Image,
} from "../../Components/Common/Common.styled";
import { ThemeHook } from "../../hooks/useThemeHook";
import { Modal } from "../SingInPage/singInPage.styled";

export default function LoadingPage() {
  const { changeTheme } = ThemeHook();

  return (
    <Modal>
      <Image src="/images/zhdun.png" />
      <TextErrorAndLoading $changeTheme={changeTheme}>
        Downloading, wait...
      </TextErrorAndLoading>
    </Modal>
  );
}
