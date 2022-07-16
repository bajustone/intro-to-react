import MessageItem from "../contact-item";
import "./style.css";
const ContactList = () =>{
    return <ul className="contact-list">
        <MessageItem profile="https://pps.whatsapp.net/v/t61.24694-24/287466759_738932417531405_6986424943633290329_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwG2_hi_4gkMpLfW63YsXxvjaxx4t0iOn1kmkWtE5nZIg&oe=62E3ADD8" name="Freddy" message="some text from message"/>
        <MessageItem profile="https://pps.whatsapp.net/v/t61.24694-24/228382189_119956434055720_6015630013739449355_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxUJzCYulujd-9drHPWhFwHKDm-0AknDehM3On3loQvbQ&oe=62E19FE7" name="Vaillante" message="some text from message"/>
        <MessageItem profile="https://pps.whatsapp.net/v/t61.24694-24/139161218_231381011905857_3459933884291685050_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyjsfUC-lWm5Sj4XcbR3a_lXos0tw4A5KmYztwJ8PaY2w&oe=62E0F0D5" name="Nadia" message="some text from message"/>
        <MessageItem profile="https://pps.whatsapp.net/v/t61.24694-24/139161218_231381011905857_3459933884291685050_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyjsfUC-lWm5Sj4XcbR3a_lXos0tw4A5KmYztwJ8PaY2w&oe=62E0F0D5" name="Tunga" message="some text from message"/>
    </ul>
}
export default ContactList;