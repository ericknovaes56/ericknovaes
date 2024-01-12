export default function Load(){

    const click = () =>{
        localStorage.removeItem("data")
        localStorage.removeItem("nome")
        localStorage.removeItem("repo")
        window.location.href=""
    }

    return (
        <button onClick={click}>
            <i class='bx bx-reset bx-tada'></i>
        </button>
    )
}