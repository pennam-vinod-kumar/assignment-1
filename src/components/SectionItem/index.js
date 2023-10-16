import './index.css'
const SectionItem=(props)=> {
    const {details}=props
    const {image,title,stats,change}=details
    return (
        <div className="section-bg">
            <div>
             {image}
            </div>
            <div>
                <p>{title}</p>
                <h1>{stats}</h1>
                <p>{change}</p>
            </div>
        </div>
    )


}
export default SectionItem