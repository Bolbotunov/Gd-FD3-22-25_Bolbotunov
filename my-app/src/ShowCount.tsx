import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './numberSlice';
import { useTypeSelector } from './';
import { actions } from './';

export default function ShowCount() {
  const storedCount = useTypeSelector((store) => store.numberState.count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Stored Count:', storedCount);
  }, [storedCount]);

  function addOne() {
    dispatch(increment())
  }

  function minusOne() {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <p>{storedCount}</p>
    </>
  );
}