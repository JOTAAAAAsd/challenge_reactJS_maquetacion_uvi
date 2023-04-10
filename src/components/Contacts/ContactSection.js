import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsFillSendFill } from 'react-icons/bs';
import { Row, Col, Form, Button } from "react-bootstrap";


export const ContactSection = () => {


    return <div className="contact_section_content">
        <Row>
            <Col xs={12} md={6} lg={6}>
                <div className="contact_title_content">
                    <h1>Contacto</h1>
                </div>
                <div>
                    <ul className="contact_ul">
                        <li><BsLinkedin /> <span><a href="https://www.linkedin.com/company/universo-i/" target="_blank">/uvi</a> </span></li>
                        <li><MdEmail /> <span>info@uvi.com.ar</span></li>
                    </ul>
                </div>
            </Col>

            <Col xs={12} md={6} lg={4} style={{ margin: "0 auto" }}>
                <Form autoComplete="off">
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Nombre</Form.Label>
                        <Form.Control className='contact_input_control' type="text" placeholder="Ingresa tu nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Correo</Form.Label>
                        <Form.Control className='contact_input_control' type="email" placeholder="Ingresa tu correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Teléfono</Form.Label>
                        <Form.Control className='contact_input_control' type="text" placeholder="Ingresa tu teléfono" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Archivo adjunto</Form.Label>
                        <Form.Control className='contact_input_control' type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                        <Form.Label className='contact_input_label'>Seleccionar plan</Form.Label>
                        <Form.Select className='contact_input_control'  >
                            <option value="">Seleccionar un plan</option>
                            <option>Plan 1</option>
                            <option>Plan 2</option>
                            <option>Plan 3</option>
                        </Form.Select>
                    </Form.Group>
                    <div style={{ textAlign: "right" }} className='contact_input_submit'>
                        <Button type="submit" onMouseDown={(e) => e.preventDefault()}>
                            <span>Enviar</span> <BsFillSendFill />
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </div>;
}