import React from "react";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { MenuWrapper } from "../Style";
import { useDispatch } from "react-redux";
import {
  switchProfileModalVisibility,
  switchLanguageModalVisibility,
} from "../../redux/ModalSlice";
import { useTranslation } from "react-i18next";

const useDropDownApi = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navbarDropDown = ({ logOutHandler }) => {
    return [
      {
        label: (
          <MenuWrapper onClick={() => dispatch(switchProfileModalVisibility())}>
            <SettingOutlined /> {t("navbar_section.setting")}
          </MenuWrapper>
        ),
        key: "0",
      },
      {
        label: (
          <MenuWrapper
            onClick={() => dispatch(switchLanguageModalVisibility())}
          >
            <TranslationOutlined />
            {t("navbar_section.changeLanguage")}
          </MenuWrapper>
        ),
        key: "1",
      },

      {
        label: (
          <MenuWrapper isDanger={true} onClick={logOutHandler}>
            <LogoutOutlined /> {t("navbar_section.logOut")}
          </MenuWrapper>
        ),
        key: "3",
      },
    ];
  };
  return { navbarDropDown };
};

export default useDropDownApi;
