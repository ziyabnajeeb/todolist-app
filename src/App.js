import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FaCircleCheck, FaPen, FaTrash } from 'react-icons/fa6'

import './App.scss'

const App = () => {
  // Task (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 2, title: 'Task 2', status: false }
  ])

  const [newToDo, setNewToDo] = useState('')
  const [updatedToDoValue, setUpdatedToDoValue] = useState('')

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
      id: updatedToDoValue.id,
      title: e.target.value,
      status: updatedToDoValue.status ? true : false
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
        <Row>
          <Col lg={6} className="mx-auto my-4">
            <Row>
              <Col xs={12} md={7}>
                <Form.Control
                  size="lg"
                  placeholder="Update Todo"
                  value={updatedToDoValue && updatedToDoValue.title}
                  onKeyUp={(e) => updateToDo(e)}
                  onChange={(e) => setUpdateToDoData(e)}
                />
              </Col>
              <Col className="d-grid gap-3 d-md-flex justify-content-md-end mt-3 mt-md-0">
                <Button
                  variant="warning"
                  size="lg"
                  className="me-md-3"
                  name="update-todo-btn"
                  onClick={(e) => updateToDo(e)}>
                  Update
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={(e) => cancelUpdate(e)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg={6} className="mx-auto my-4">
            <Row>
              <Col xs={12} md={9}>
                <Form.Control
                  size="lg"
                  placeholder="Add Todo"
                  value={newToDo}
                  onKeyUp={(e) => addToDo(e)}
                  onChange={(e) => handleAddToDo(e)}
                />
              </Col>
              <Col className="d-grid gap-3 d-md-flex justify-content-md-end mt-3 mt-md-0">
                <Button
                  variant="warning"
                  size="lg"
                  name="add-todo-btn"
                  onClick={(e) => addToDo(e)}>
                  Add Todo
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
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

      {/* Todo List */}
      <Row>
        <Col lg={12} className="mt-4">
          {toDo &&
            toDo.map((todo, i) => (
              <Row id={todo.id} className="todo-list" key={todo.id}>
                <Col lg={6} className="todo-list__body mx-auto">
                  <div className="todo-list__item d-flex align-items-center juststify-content-between mx-auto mb-3 py-2 px-3">
                    <div className="todo-list__item-body-content d-flex flex-fill align-items-center">
                      <p
                        className={
                          todo.status
                            ? 'mb-0 text-decoration-line-through text-success'
                            : 'mb-0'
                        }>
                        {todo.title}
                      </p>
                    </div>
                    <div className="todo-list__item-body-actions ms-auto d-flex align-items-center ps-3">
                      <span className="me-3">
                        <FaCircleCheck
                          className={todo.status && 'text-success'}
                          onClick={() => markDone(todo.id)}
                        />
                      </span>
                      {!todo.status && (
                        <span className="me-3">
                          <FaPen onClick={() => populateUpdateInput(todo)} />
                        </span>
                      )}
                      <span className="text-danger">
                        <FaTrash onClick={() => deleteToDo(todo.id)} />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </Container>
  )
}

export default App
