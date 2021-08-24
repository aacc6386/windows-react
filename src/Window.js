import { useRef, useState } from "react";
import useDoubleClick from "use-double-click";
import { Rnd } from "react-rnd";
import "./Window.scss";

export default function Window(props) {
    const [maximized, setMaximize] = useState(false);
    const titlebar = useRef();
    useDoubleClick({
        onDoubleClick: (e) => {
            setMaximize(!maximized);
        },
        ref: titlebar,
    });
    return (
        <>
            <Rnd
                className={"window" + (maximized ? " maximized" : "")}
                dragHandleClassName="title-bar"
                enableResizing={!maximized}
                disableDragging={maximized}
                minWidth={250}
                minHeight={150}
            >
                <div className="title-bar" ref={titlebar}>
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button
                            aria-label="Maximize"
                            onClick={() => setMaximize(!maximized)}
                        ></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">{props.children}</div>
            </Rnd>
        </>
    );
}
