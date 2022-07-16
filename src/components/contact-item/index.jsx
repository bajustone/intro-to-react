import "./style.css";
const MessageItem = ({name, message, profile}) => {
    return <li className="contact-item">
        <img src={profile} alt="" />
        <div className="contact-label">
            <h1>{name}</h1>
            <h2>{message}</h2>
        </div>
    </li>
}
export default MessageItem;