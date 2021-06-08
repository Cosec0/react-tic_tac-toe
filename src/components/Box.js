import './Box.css';

export default function Box(props) {
    let borderStyle = '1px solid red';

    return (
        <div className="box" style={
            props.boxId === 0 ? ({
                borderRight: borderStyle,
                borderBottom: borderStyle
            }) :
            props.boxId === 1 ? ({
                borderRight: borderStyle,
                borderBottom: borderStyle,
            }) :
            props.boxId === 2 ? ({
                borderBottom: borderStyle,
            }) :
            props.boxId === 3 ? ({
                borderBottom: borderStyle,
                borderRight: borderStyle,
            }) :
            props.boxId === 4 ? ({
                borderRight: borderStyle,
                borderBottom: borderStyle
            }) :
            props.boxId === 5 ? ({
                borderBottom: borderStyle,
            }) :
            props.boxId === 6 ? ({
                borderRight: borderStyle
            }) :
            props.boxId === 7 ? ({
                borderRight: borderStyle,
            }) :
            props.boxId === 8 ? ({
                //borderRight: '1px solid #d3d3d3'
            }) :
            ({
                border: '1px solid #d3d3d3'
            })
        }>
            {props.children}
        </div>
    )
}
