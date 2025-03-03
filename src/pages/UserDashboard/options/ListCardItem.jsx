import './ListCardItem.css';
import Card from 'react-bootstrap/Card';


const ListCardItem = () => {

    return (
        <>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        
        </>
    )

}


export default ListCardItem.jsx;