import { useState, useRef, useEffect } from "react";
import styles from "./Layout.module.css";
import { VscGear } from "react-icons/vsc"

function Layout(props) {
  const layout = useRef(null);
  const nav = useRef(null);
  const vResizerLeft = useRef(null);
  const sidebar = useRef(null);
  const header = useRef(null);
  const hResizerTop = useRef(null);
  const main = useRef(null);
  const article = useRef(null);
  const vResizerRight = useRef(null);
  const aside = useRef(null);
  const hResizerBottom = useRef(null);
  const footer = useRef(null);

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [navWidth, setNavWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mainHeight, setMainHeight] = useState(0);
  const [articleWidth, setArticleWidth] = useState(0);

  const [resizerLeftMouseDown, setResizerLeftMouseDown] = useState(false);
  const [resizerRightMouseDown, setResizerRightMouseDown] = useState(false);
  const [resizerTopMouseDown, setResizerTopMouseDown] = useState(false);
  const [resizerBottomMouseDown, setResizerBottomMouseDown] = useState(false);

  useEffect(() => {
    console.log({
      cursorX,
      cursorY,
      navWidth,
      headerHeight,
      mainHeight,
      articleWidth,
    });
  }, [cursorX, cursorY, navWidth, headerHeight, mainHeight, articleWidth]);

  useEffect(() => {
    if (
      resizerLeftMouseDown ||
      resizerRightMouseDown ||
      resizerTopMouseDown ||
      resizerBottomMouseDown
    ) {
      layout &&
        (layout.current.style.cursor =
          resizerLeftMouseDown || resizerRightMouseDown
            ? "ew-resize"
            : "ns-resize");
      sidebar && (sidebar.current.style.userSelect = "none");
      sidebar && (sidebar.current.style.pointerEvents = "none");
      nav && (nav.current.style.userSelect = "none");
      nav && (nav.current.style.pointerEvents = "none");
      header && (header.current.style.userSelect = "none");
      header && (header.current.style.pointerEvents = "none");
      footer && (footer.current.style.userSelect = "none");
      footer && (footer.current.style.pointerEvents = "none");
      article && (article.current.style.userSelect = "none");
      article && (article.current.style.pointerEvents = "none");
      aside && (aside.current.style.userSelect = "none");
      aside && (aside.current.style.pointerEvents = "none");
    } else {
      layout && layout.current.style.removeProperty("cursor");
      sidebar && (sidebar.current.style.userSelect = "auto");
      sidebar && (sidebar.current.style.pointerEvents = "auto");
      nav && (nav.current.style.userSelect = "auto");
      nav && (nav.current.style.pointerEvents = "auto");
      header && (header.current.style.userSelect = "auto");
      header && (header.current.style.pointerEvents = "auto");
      footer && (footer.current.style.userSelect = "auto");
      footer && (footer.current.style.pointerEvents = "auto");
      article && (article.current.style.userSelect = "auto");
      article && (article.current.style.pointerEvents = "auto");
      aside && (aside.current.style.userSelect = "auto");
      aside && (aside.current.style.pointerEvents = "auto");
    }
  }, [
    resizerLeftMouseDown,
    resizerRightMouseDown,
    resizerTopMouseDown,
    resizerBottomMouseDown,
  ]);

  const handleOnMouseMove = (e) => {
    if (resizerLeftMouseDown) {
      console.log("processing resizerLeftMouseDown!");
      const dx = e.clientX - cursorX;
      const newWidth =
        ((navWidth + dx) * 100) /
        vResizerLeft.current.parentNode.getBoundingClientRect().width;
      nav.current.style.width = `${newWidth}%`;
    } else if (resizerRightMouseDown) {
      console.log("processing resizerRightMouseDown!");
      const dx = e.clientX - cursorX;
      const newWidth =
        ((articleWidth + dx) * 100) /
        vResizerRight.current.parentNode.getBoundingClientRect().width;
      article.current.style.width = `${newWidth}%`;
    } else if (resizerTopMouseDown) {
      console.log("processing resizerTopMouseDown!");
      const dy = e.clientY - cursorY;
      const newHeight =
        ((headerHeight + dy) * 100) /
        hResizerTop.current.parentNode.getBoundingClientRect().height;
      header.current.style.height = `${newHeight}%`;
    } else if (resizerBottomMouseDown) {
      console.log("processing resizerBottomMouseDown!");
      const dy = e.clientY - cursorY;
      const newHeight =
        ((mainHeight + dy) * 100) /
        hResizerBottom.current.parentNode.getBoundingClientRect().height;
      main.current.style.height = `${newHeight}%`;
      article.current.style.height = `${newHeight}%`;
      aside.current.style.height = `${newHeight}%`;
    }
  };

  const handleOnMouseUp = (e) => {
    if (resizerLeftMouseDown) {
      console.log("ending resizerLeftMouseDown!");
      setResizerLeftMouseDown(false);
    } else if (resizerRightMouseDown) {
      console.log("ending resizerRightMouseDown!");
      setResizerRightMouseDown(false);
    } else if (resizerTopMouseDown) {
      console.log("ending resizerTopMouseDown!");
      setResizerTopMouseDown(false);
    } else if (resizerBottomMouseDown) {
      console.log("ending resizerBottomMouseDown!");
      setResizerBottomMouseDown(false);
    }
  };

  const handleResizerLeftMouseDown = (e) => {
    console.log("starting resizerLeftMouseDown!");
    if (!resizerLeftMouseDown) {
      setResizerLeftMouseDown(true);
    }
    setCursorX(e.clientX);
    setCursorY(e.clientY);
    setNavWidth(nav.current.getBoundingClientRect().width);
  };

  const handleResizerRightMouseDown = (e) => {
    console.log("starting resizerRightMouseDown!");
    if (!resizerRightMouseDown) {
      setResizerRightMouseDown(true);
    }
    setCursorX(e.clientX);
    setCursorY(e.clientY);
    setArticleWidth(article.current.getBoundingClientRect().width);
  };

  const handleResizerTopMouseDown = (e) => {
    console.log("starting resizerTopMouseDown!");
    if (!resizerTopMouseDown) {
      setResizerTopMouseDown(true);
    }
    setCursorX(e.clientX);
    setCursorY(e.clientY);
    setHeaderHeight(header.current.getBoundingClientRect().height);
  };

  const handleResizerBottomMouseDown = (e) => {
    console.log("starting resizerBottomMouseDown!");
    if (!resizerBottomMouseDown) {
      setResizerBottomMouseDown(true);
    }
    setCursorX(e.clientX);
    setCursorY(e.clientY);
    setMainHeight(main.current.getBoundingClientRect().height);
  };

  return (
    <div
      ref={layout}
      className={styles.layout}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
    >
      <div ref={sidebar} className={styles.sidebar}>
        {props.Bar || <VscGear size={60}/>}
      </div>
      <nav ref={nav} className={styles.nav}>
        {props.Nav || "Nav"}
      </nav>
      <div
        ref={vResizerLeft}
        className={styles.vresizer}
        onMouseDown={handleResizerLeftMouseDown}
      ></div>
      <div className={styles.container}>
        <header ref={header} className={styles.header}>
          {props.Header || "Header"}
        </header>
        <div
          ref={hResizerTop}
          className={styles.hresizer}
          onMouseDown={handleResizerTopMouseDown}
        ></div>
        <div className={styles.body}>
          <main ref={main} className={styles.main}>
            <article ref={article} className={styles.article}>
              {props.Article || "Article"}
            </article>
            <div
              ref={vResizerRight}
              className={styles.vresizer}
              onMouseDown={handleResizerRightMouseDown}
            ></div>
            <aside ref={aside} className={styles.aside}>
              {props.Aside || "Aside"}
            </aside>
          </main>
          <div
            ref={hResizerBottom}
            className={styles.hresizer}
            onMouseDown={handleResizerBottomMouseDown}
          ></div>
          <footer ref={footer} className={styles.footer}>
            {props.Footer || "Footer"}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
