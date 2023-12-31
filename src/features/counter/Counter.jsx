import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  const counting = useSelector((state) => state.counterSlicing.val);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Count: {counting}
      </h1>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(increment())}>+</button>
    </div>

  )
}

export default Counter