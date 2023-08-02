import './Todos.css';

const Todos = ({ id, todoName, completed, completeTodo, deleteTodo }) => {
  return (
    <div id={id} className='list'>
      <p className={completed && 'green-strike'}>{todoName}</p>
      <div className='actions'>
        <button onClick={() => completeTodo(id)}>Completed</button>
        <button type='button' onClick={() => deleteTodo(id)}>
          X
        </button>
      </div>
      ;
    </div>
  );
};

export default Todos;
