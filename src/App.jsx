import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/about";
import GitProvider from "./components/Provider/GitProvider";
import Resume from "./components/resume";
import Contact from "./components/contact";
import useGitStatus from "./customHooks/useGitStatus";
import Home from "./components/home";
import Alert from "./components/alert";
import "./app.css";

export default function App() {
  const no_of_Repo = useGitStatus({ parameter: "public_repos" });
  return (
    <>
      {no_of_Repo > 0 && (
        <GitProvider.Provider value={{ no_of_Repo }}>
          <div className="App-wrapper">
            <Alert message={"Under Development"} />
            <Header />
            <Home />
            <About />
            <Resume />
            <Skill />
            <Contact />
          </div>
        </GitProvider.Provider>
      )}
    </>
  );
}
