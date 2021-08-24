/* eslint-disable jsx-a11y/iframe-has-title */
import Window from "./Window";

export default function App() {
    return (
        <>
            <Window title="Friday Night Funkin" fullscreen={true}>
                <iframe src="https://funkin.puyo.xyz/nightly"></iframe>
            </Window>
        </>
    );
}
