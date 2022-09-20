import "../../style/Footer.css";

function Footer(props){

    const button = () =>{
        return <button id="clearComp" onClick={props.handleClearCompleted}>Clear Completed</button>
    }

    return(
        <div id="footer">
            <p>{props.length('notCompleted')} item{props.length('notCompleted')>1 ? 's' : ""} remaining</p>
            <div id="buttonBox">
                <button
                    onClick={()=>{props.changeShowStatus('all')}}
                    id={props.show === 'all'?"current":"none"}>All</button>
                <button
                    onClick={()=>{props.changeShowStatus('active')}}
                    id={props.show === 'active'?"current":"none"}>Active</button>
                <button
                    onClick={()=>{props.changeShowStatus('completed')}}
                    id={props.show === 'completed'?"current":"none"}>Completed</button>
            </div>
            {props.length('completed') > 0 ? button() : ''}
        </div>
    );
}

export default Footer;