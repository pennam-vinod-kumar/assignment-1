import BarChartData from '../BarChartData'
import SectionItem from '../SectionItem'
import PieChartData from '../PieChartData'
import ProductTable from '../ProductTable'
import { FiSearch } from "react-icons/fi"
import { AiOutlineArrowUp,AiOutlineArrowDown } from "react-icons/ai";
import { MdAttachMoney,MdOutlineAccountBalanceWallet,MdOutlineSavings } from "react-icons/md";
import { BiNotepad  } from "react-icons/bi";
import './index.css'
const sectionsList=[
    {id:1,image:<div className='image-container1'><MdAttachMoney className="image"/></div>,title:"Earnings",stats:"$198k",change:<p><span className="increasing"><AiOutlineArrowUp />37.8% </span> this month</p>},
    {id:2,image:<div className='image-container2'><BiNotepad className="image"/></div>,title:"Orders",stats:"$2.4k",change:<p><span className="decreasing"><AiOutlineArrowDown />2% </span> this month</p>},
    {id:3,image:<div className='image-container3'><MdOutlineAccountBalanceWallet className="image"/></div>,title:"Balance",stats:"$2.4k",change:<p><span className="decreasing"><AiOutlineArrowDown />2%</span> this month</p>},
    {id:4,image:<div className='image-container4'><MdOutlineSavings className="image"/></div>,title:"Total sales",stats:"$89k",change:<p><span className="increasing"><AiOutlineArrowUp />11% </span> this week</p>}
]

const Home=()=> {
    return (
        <div className="home-bg">
            <div className="top-section">
            <h1>Hello Shahrukh,</h1>
            <div className="search-section">
                <FiSearch className="search-icon"/>
                <input type="search" placeholder="Search" className="search-tab"/>
            </div>
            </div>
            <div className='items-bg'>
                {sectionsList.map(each=> 
                    (<SectionItem details={each} key={each.id}/>
                ))}
            </div>
            <div className='charts-bg'>
                <BarChartData />
                <PieChartData />
            </div>
            <div className='bottom-bg'>
                <div className='bottom-heading'>
                    <h1>Product Sell</h1>
                    <div className='right-section'>
                    <div className='search-section'>
                    <FiSearch className="search-icon2"/>
                    <input type="search" placeholder='Search' className='search-tab2'/>
                    </div>
                    <select className='select-section'>
                        <option value="last 30 days">Last 30 days</option>
                        <option value="last 15 days">Last 15 days</option>
                        <option value="last 60 days">last 60 days</option>
                    </select>
                    </div>
                </div>
            </div>
            <ProductTable />
        </div>
    )

}
export default Home