import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AddToDo, ToDo, UpdateToDo } from './components'

import './App.scss'

const App = () => {
  // Task (ToDo List) State
  const [toDo, setToDo] = useState([])

  const [newToDo, setNewToDo] = useState('')
  const [updatedToDoValue, setUpdatedToDoValue] = useState('')

  useEffect(() => {
    const fetchedTodos = JSON.parse(localStorage.getItem('todos'))

    fetchedTodos && setToDo(fetchedTodos)
  }, [])

  useEffect(() => {
    toDo?.length && localStorage.setItem('todos', JSON.stringify(toDo))
  }, [toDo])

  // Add ToDo Functionality
  const addToDo = (e) => {
    if (e.key === 'Enter' || e.target.name === 'add-todo-btn') {
      if (newToDo) {
        const newId = toDo.length === 0 ? 1 : toDo[toDo.length - 1].id + 1
        setToDo([...toDo, { id: newId, title: newToDo, status: false }])
        setNewToDo('')
      }
    }
  }

  const handleAddToDo = (e) => {
    setNewToDo(e.target.value)
  }

  // Delete ToDo Functionality
  const deleteToDo = (id) => {
    setToDo(toDo.filter((todo) => todo.id !== id))
  }

  // Mark Done ToDo Functionality
  const markDone = (id) => {
    setToDo(
      toDo.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    )
  }

  // Update ToDo Functionality
  const populateUpdateInput = (todo) => {
    setUpdatedToDoValue({
      id: todo.id,
      title: todo.title,
      status: todo.status ? true : false
    })
  }

  const setUpdateToDoData = (e) => {
    setUpdatedToDoValue({
      ...updatedToDoValue,
      title: e.target.value
    })
  }

  const updateToDo = (e) => {
    if (e.key === 'Enter' || e.target.name === 'update-todo-btn') {
      let filterRecords = [...toDo].filter(
        (todo) => todo.id !== updatedToDoValue.id
      )
      setToDo([...filterRecords, updatedToDoValue])
      setUpdatedToDoValue('')
    }
  }

  const cancelUpdate = (e) => {
    setUpdatedToDoValue('')
  }

  return (
    <Container as="main" className="App mt-4">
      <Row>
        <Col lg={12} className="todo-list__header text-center mb-3 mx-auto">
          <h1 className="fw-bold">To Do List App</h1>
        </Col>
      </Row>

      {updatedToDoValue ? (
        <UpdateToDo
          updatedToDoValue={updatedToDoValue}
          updateToDo={updateToDo}
          cancelUpdate={cancelUpdate}
          setUpdateToDoData={setUpdateToDoData}
        />
      ) : (
        <AddToDo
          addToDo={addToDo}
          handleAddToDo={handleAddToDo}
          newToDo={newToDo}
        />
      )}

      <Row>
        <Col
          lg={12}
          className={
            toDo && toDo.length
              ? 'd-none'
              : 'todo-list-message text-center mx-auto'
          }>
          <p>{toDo && toDo.length ? '' : 'Please Add Todo...'}</p>
        </Col>
      </Row>

      <ToDo
        deleteToDo={deleteToDo}
        markDone={markDone}
        populateUpdateInput={populateUpdateInput}
        toDo={toDo}
      />
    </Container>
  )
}

export default App
