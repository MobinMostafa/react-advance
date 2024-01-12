import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function App() {
  return (
    <>
     <Provider store={store}>
        <AddTodo/>
        <Todo/>
     </Provider>
    </>
  )
}
