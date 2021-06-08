import './NextPlayer.css';

export default function NextPlayer(props) {
    return (
        <div className="next_player">
            <p>Next player: {props.children}</p>
        </div>
    )
}
