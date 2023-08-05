import { Col, Row } from 'react-bootstrap'
import { FaCircleCheck, FaPen, FaTrash } from 'react-icons/fa6'

import './ToDo.scss'

 const ToDo = ({ deleteToDo, markDone, populateUpdateInput, toDo }) => {
  return (
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
                        className={todo.status && 'text-secondary'}
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
  )
}

export default ToDo
