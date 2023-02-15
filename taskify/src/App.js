import { Header } from "./components/Header/Header";
import Newtask from "./components/NewTask/Newtask";
import { Alltask } from "./components/AllTasks/Alltask";
function App() {
  return (
    <>
      <Header />
      <Newtask />
      <Alltask />
    </>
  );
}

export default App;
