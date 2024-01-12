export default function Erick({msg , data}){
    return (
        <div className="box-msg erick">
                <div className="profile">
                    <img src={data.avatar_url} alt="error" />
                    {data.name}
                </div>
            <p className="msg">{msg}</p>
        </div>
    )
}