import { Button, Col, Form, Row } from 'react-bootstrap'

import './AddToDo.scss'

const AddToDo = ({ addToDo, handleAddToDo, newToDo }) => {
  return (
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
  )
}

export default AddToDo
