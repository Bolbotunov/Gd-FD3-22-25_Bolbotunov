import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_PLUS } from './numberReducer';
import { ACTION_MINUS } from './numberReducer';

export default function ShowCount() {
  const { count: storedCount } = useSelector((store: any) => store.numberState)
  const dispatch = useDispatch()


  useEffect(() => {
    console.log('Stored Count:', storedCount);
  }, [storedCount]);


    function addOne(count: any) {
      if(count) {
        dispatch({type: ACTION_PLUS, count: storedCount })
      }
    }

    function minusOne(count: any) {
      if(count) {
        dispatch({type: ACTION_MINUS, count: storedCount})
      }
     
    }
  

  return (
    <>
      <button onClick = {addOne}>+</button>
      <button onClick = {minusOne}>-</button>
      <p>{storedCount}</p>
    </>
  );
}