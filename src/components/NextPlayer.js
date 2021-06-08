import './NextPlayer.css';

export default function NextPlayer(props) {
    return (
        <div className="next_player">
            <p>Next player: <span>{props.children}</span></p>
        </div>
    )
}
