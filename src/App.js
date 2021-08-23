import * as React from "react";
import { Rnd } from "react-rnd";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Rnd
                    className="window"
                    dragHandleClassName="title-bar"
                    minWidth={250}
                    minHeight={150}
                >
                    <div className="title-bar">
                        <div className="title-bar-text">
                            A Window With Stuff In It
                        </div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <p>There's so much room for activities!</p>
                    </div>
                </Rnd>
            </>
        );
    }
}
