import { useDispatch, useSelector } from 'react-redux';
import { todosSelectors, changeFilter } from '../../redux/todos';
// import styles from './TodoFilter.module.css';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const value = useSelector(todosSelectors.getFilter);

  return (
    <div className='filter'>
      <p className='label'>Фильтр по содержимому</p>
      <input
        type="text"
        className='input'
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}