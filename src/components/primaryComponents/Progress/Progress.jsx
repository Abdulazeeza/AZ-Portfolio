import "./Progress.scss";

const Progress = ({progress})=> {
    return(
        <div className="custom-progress">
            <div className="custom-progress__inner" style={{width: `${progress}%`}}></div>
        </div>
    )
}
export default Progress;