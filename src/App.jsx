import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Repositories from "./pages/Repositories";
import CodeReview from "./pages/CodeReview";
import CloudSecurity from "./pages/CloudSecurity";
import HowToUse from "./pages/HowToUse";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<SignIn />} />
                    <Route path="/home" element={<Home />}>
                        <Route index element={<Repositories />} />
                        <Route path="repositories" element={<Repositories />} />
                        <Route path="codeReview" element={<CodeReview />} />
                        <Route
                            path="cloudSecurity"
                            element={<CloudSecurity />}
                        />
                        <Route path="howToUse" element={<HowToUse />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="support" element={<Support />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
