import './ListCarousel.css';
import ListCardItem from './ListCardItem.jsx';


const ListCarousel = () => {
 
    return (
        <div>
            <div className="main">
                <div className="movies-container">
                 
                <ListCardItem />
                <ListCardItem />
                <ListCardItem />
                <ListCardItem />
                <ListCardItem />  
                </div>          
            </div>
        </div>
    )
}

export default ListCarousel.jsx;
