import { textServicesStatic } from "../../assets/data-static/textStatic";
import { Row, Col, Card, Image } from "react-bootstrap";

export const ServiceSection = () => {

    const image_services = [
        "https://cdn-icons-png.flaticon.com/128/893/893505.png",
        "https://cdn-icons-png.flaticon.com/128/4213/4213130.png",
        "https://cdn-icons-png.flaticon.com/128/8976/8976594.png"
    ];

    const description_services = [
        "Mejoramos tu presentación ante los reclutadores logrando así tener entrevistas eficientes. Un CV bien redactado es el que dará la primera impresión ante tu futuro empleador.",
        "Nos encargamos de ajustar tu perfil de LinkedIn conforme a tus experiencias y objetivos. Un perfil llamativo atraerá visibilidad a tu perfil y consigo posibles ofertas laborales.",
        "Estamos al tanto de tus ganas de superarte profesionalmente, sabemos y entendemos que anhelas desenvolverte adecuadamente en una entrevista y para eso estamos, para ayudarte a afrontarla por medio de nuestros consejos y simulacros."
    ];

    return <div className="service_section_content">
        <Row>
            <Col md={8} style={{ margin: "0 auto" }}>
                <div className="content_title">
                    <h1>Nuestros servicios</h1>
                </div>

                <div className="content_subtitle">
                    <h5>
                        {'"'}Somos la llave que te abrirá paso a tu próximo camino.{'"'} <br />
                        Ofrecemos estos servicios
                    </h5>
                </div>
            </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
            {
                textServicesStatic.map((e, i) => <Col xs={12} lg={3} md={6} key={i} style={{ marginBottom: "5%" }}>
                    <Card className="services_card_content h-100">
                        <div style={{ textAlign: "center" }}>
                            <Image width={100} src={image_services[i]} />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>{e.title}</Card.Title>
                            <Card.Text>
                                {description_services[i]}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)
            }
        </Row>
    </div>;
}