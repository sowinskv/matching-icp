import SidePanelsPage from "./HeaderComponent/SidePanelsPage";
import PlugConnect from '@psychedelic/plug-connect';

export const Header = () => {
    return (
        <header className="bg-slate-800 bg-opacity-0 flex items-center p-2 fixed w-full top-0 justify-between">
            <SidePanelsPage />
            <PlugConnect
            dark
            title="Connect Plug Wallet"
            onConnectCallback={() => console.log("callback")}
            host="host-example" // actual host URL where canister is deployed
            whitelist={['bkyz2-fmaaa-aaaaa-qaaaq-cai']}
            />
        </header>
    );
};