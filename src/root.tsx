// @refresh reload
import { Suspense, createSignal } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import ThemeSelector from "./components/ThemeSelector";
import "./root.css";

export default function Root() {
  const [theme, setTheme] = createSignal("garden");

  return (
    <Html lang="en" data-theme={theme()}>
      <Head>
        <Title>Todo App - SolidJS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
            <ThemeSelector setTheme={setTheme} />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
