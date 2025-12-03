import Counter from "./Counter"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "./redux/counterSlice"

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispath = useDispatch()

  return (
    <>
      <div>
        <h1>Лічильник: {count}</h1>
        <button onClick={() => {
          dispath(increment())
        }}>
          click me
        </button>
      </div>
    </>
  );
}

export default App
