import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import HowItWorks from "./pages/HowItWorks";
import Upload from "./pages/Upload";
import UploadSingle from "./pages/UploadSingle";
import UploadMultiple from "./pages/UploadMultiple";
import ConnectWallet from "./pages/ConnectWallet";
import NftDetails from "./pages/NftDetails";
import Wallets from "./pages/Wallets"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/discover" exact>
          <Discover />
        </Route>
        <Route path="/discover/:NftId" exact>
          <NftDetails />
        </Route>
        <Route path="/how-it-works" exact>
          <HowItWorks />
        </Route>
        <Route path="/upload" exact>
          <Upload />
        </Route>
        <Route path="/upload-single" exact>
          <UploadSingle />
        </Route>
        <Route path="/upload-multiple" exact>
          <UploadMultiple />
        </Route>
        <Route path="/connect-wallet" exact>
          <ConnectWallet />
        </Route>
        <Route path="/wallets" exact>
          <Wallets />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
