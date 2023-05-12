import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Home from "../components/Home";
import Report from "../components/Report";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locale/en";
import { ru } from "../utils/locale/ru";
import { uzLotin } from "../utils/locale/uzLotin";
import { uzKrill } from "../utils/locale/uzKrill";
import { useSelector } from "react-redux";
import { paths } from "../utils/path";

const Root = () => {
  const { lang } = useSelector((state) => state.locale);
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uzLotin: { translation: uzLotin },
      uzKrill: { translation: uzKrill },
    },
    lang: lang,
    fallbackLng: lang,
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        {paths.map(({ id, path, element, hasChild, children }) =>
          hasChild ? (
            <Route key={id} path={path} element={element}>
              {children.map(({ id, path, element, hasChild, children2 }) =>
                hasChild ? (
                  <Route key={id} element={element} path={path}>
                    {children2.map(({ id, path, element }) => (
                      <Route key={id} path={path} element={element} />
                    ))}
                  </Route>
                ) : (
                  <Route key={id} path={path} element={element} />
                )
              )}
            </Route>
          ) : (
            <Route key={id} path={path} element={element} />
          )
        )}
      </Route>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
};

export default Root;
