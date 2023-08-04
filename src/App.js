import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaCircleCheck, FaPen, FaTrash } from 'react-icons/fa6';

import './App.scss';

const App = () => {
  // Task (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 1, title: 'Task 1', status: false },
    { id: 2, title: 'Task 2', status: false },
  ]);

  return (
    <Container as='main' className='App mt-4'>
      <Row>
        <Col lg={12} className='todo-list__header text-center mb-3 mx-auto'>
          <h1 className='fw-bold'>To Do List App</h1>
        </Col>
      </Row>

      {/* Update Task */}
      <Row>
        <Col lg={6} className='mx-auto my-4'>
          <Row>
            <Col xs={12} md={7}>
              <Form.Control size='lg' placeholder='Update Todo' />
            </Col>
            <Col className='d-grid gap-3 d-md-flex justify-content-md-end mt-3 mt-md-0'>
              <Button variant='warning' size='lg' className='me-md-3'>
                Update
              </Button>
              <Button variant='secondary' size='lg'>
                Cancel
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Add Task */}
      <Row>
        <Col lg={6} className='mx-auto my-4'>
          <Row>
            <Col xs={12} md={9}>
              <Form.Control size='lg' placeholder='Add Todo' />
            </Col>
            <Col className='d-grid gap-3 d-md-flex justify-content-md-end mt-3 mt-md-0'>
              <Button variant='warning' size='lg'>
                Add Todo
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col lg={12} className={toDo && toDo.length ? 'd-none' : 'todo-list-message text-center mx-auto'}>
          <p>{toDo && toDo.length ? '' : 'Please Add Todo...'}</p>
        </Col>
      </Row>

      {/* Todo List */}
      <Row>
        <Col lg={12}>
          {toDo &&
            toDo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task, i) => (
                <Row className='todo-list'>
                  <Col lg={6} id={task.id} className='todo-list__body mx-auto mt-3'>
                    <div className='todo-list__item d-flex align-items-center juststify-content-between mx-auto mb-3 py-3 px-4' key={task.id}>
                      <div className='todo-list__item-body-content d-flex flex-fill align-items-center'>
                        <p className='mb-0'>{task.title}</p>
                      </div>
                      <div className='todo-list__item-body-actions ms-auto d-flex align-items-center ps-3'>
                        <span className='me-3'>
                          <FaCircleCheck />
                        </span>
                        <span className='me-3'>
                          <FaPen />
                        </span>
                        <span className='text-danger'>
                          <FaTrash />
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              ))}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
