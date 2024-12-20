import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Front } from "./pages/front/Front";
import { Home } from "./pages/Home";
import { Js } from "./pages/js/Js";
import { JsSub } from "./pages/js/JsSub";
import { React } from "./pages/react/React";
import { CLanguage } from "./pages/C/CLanguage";
import { Python } from "./pages/python/Python";
import { routes } from "./routes";
import { FrontSub } from "./pages/front/FrontSub";
import { Java } from "./pages/java/Java";
import { JavaSub } from "./pages/java/JavaSub";
import { CLanSub } from "./pages/C/\bCLanSub";
import { PythonSub } from "./pages/python/PythonSub";
import { Publish } from "./pages/publish/Publish";
import { PublishSub } from "./pages/publish/PublishSub";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.publish} element={<Publish />} />
        <Route path={`${routes.publishSub}`} element={<PublishSub />} />

        <Route path={routes.front} element={<Front />} />
        <Route path={`${routes.frontSub}`} element={<FrontSub />} />

        <Route path={routes.js} element={<Js />} />
        <Route path={routes.jsSub} element={<JsSub />} />

        <Route path={routes.react} element={<React />} />

        <Route path={routes.java} element={<Java />} />
        <Route path={`${routes.javaSub}`} element={<JavaSub />} />

        <Route path={routes.c} element={<CLanguage />} />
        <Route path={routes.cSub} element={<CLanSub />} />

        <Route path={routes.python} element={<Python />} />
        <Route path={routes.pythonSub} element={<PythonSub />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
