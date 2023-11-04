import { Button, Col, Form, Row } from 'react-bootstrap'

import { FaArrowsRotate, FaXmark } from 'react-icons/fa6'
import './UpdateToDo.scss'

const UpdateToDo = ({
  updatedToDoValue,
  updateToDo,
  cancelUpdate,
  setUpdateToDoData
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    updateToDo(e)
  }

  return (
    <Row>
      <Col lg={6} className="mx-auto my-4">
        <Form onSubmit={(e) => handleSubmit(e)}>
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
                <FaArrowsRotate className="update-btn-icon" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={(e) => cancelUpdate(e)}>
                <FaXmark />
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default UpdateToDo
