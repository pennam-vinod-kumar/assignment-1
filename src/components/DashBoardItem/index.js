import { AiOutlineRight } from "react-icons/ai";
import './index.css'
const DashBoardItem=(props)=> {
    const {details}=props
    const {name,image}=details
    return (
        <div className="category-section">
            <div className="category-item">
           {image}
            <p>{name}</p>
            </div>
            <AiOutlineRight/>
        </div>
    )

}
export default DashBoardItem