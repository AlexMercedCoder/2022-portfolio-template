import { Card, CardButton, CardDescription, CardImage, CardTitle, Row } from "../styled_components/mainpage"

function Project(props){

    const {project} = props

    return <Card>
        <CardImage src={project.image} alt={project.name}/>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <Row>
            <CardButton>Github</CardButton>
            <CardButton>Live</CardButton>
        </Row>
    </Card>
}

export default Project