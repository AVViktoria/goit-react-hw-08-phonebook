import { useSelector } from 'react-redux';
// import styles from './Stats.module.css';
import { todosSelectors } from '../../redux/todos';

export default function Stats() {
  const total = useSelector(todosSelectors.getTotalTodoCount);
  const completed = useSelector(todosSelectors.getCompletedTodoCount);

  return (
    <div className='container'>
      <p className='item'>
        <span className='value'>{total}</span>
        <span className='label'>Total</span>
      </p>
      <p className='item'>
        <span className='value'>{completed}</span>
        <span className='label'>Complete</span>
      </p>
    </div>
  );
}