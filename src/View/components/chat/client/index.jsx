import avatar from "../../../../assets/img/user.png"

export default function Client({msg}){
    return (
        <div className="box-msg client">
                <div className="profile">
                    <img src={avatar} alt="error" />
                    Você
                </div>
            <p className="msg">{msg}</p>
        </div>
    )
}