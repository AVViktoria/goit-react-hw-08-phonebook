// import styles from './Todo.module.css';
export default function Todo({ text, completed, onToggleCompleted, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        className='checkbox'
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className='text'>{text}</p>
      <button type="button" className='button' onClick={onDelete}>
        Удалить
      </button>
    </>
  );
}