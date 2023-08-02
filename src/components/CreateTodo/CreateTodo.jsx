const CreateTodo = ({handleChange, addTodo}) => {
  return (
    <div className='addTask'>
      <h1>Add Todo</h1>
      <input onChange={handleChange} />
      <button type='button' onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
