import Navbarcomponent from "../components/navbar/Navbarcomponent";
import Todolist from "../components/todolist/todolist";
import Pomodoro from "../components/pomodoro/pomodoro";
import CenterContent from "../components/CenterContent/CenterContent";
// import Login from "./pages/login";
// import '../styles/App.css'
import { useState } from "react";
import { createContext } from "react";

export const HomeContext = createContext();

function VariableCenter({children}) {
  const [toDoFocus, setToDoFocus] = useState("hello");
  return (
    <HomeContext.Provider value="sample">
      {children}
    </HomeContext.Provider>
  );
}

function App() {

  return (
    <div className="App d-flex flex-column h-maxvh ">
      <Navbarcomponent />
      <div className="grid grid-todo_auto_pomo grid-todo_auto_pomo-mb flex-grow-1 flex-shrink-1 flex-basis-auto">
        <Todolist />
        <CenterContent />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
