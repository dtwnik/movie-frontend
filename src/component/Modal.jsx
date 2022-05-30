import '../css/Modal.css'
const modal = ({ active, setActive, data, title, time }) => {
    const refreshPage = () => {
        window.location.reload();
    }
    const username = localStorage.getItem("username")
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <span className='close' onClick={() => {
                    setActive(false)
                    refreshPage()
                }}>X</span>
                <div className='username'>Пользователь: {username}</div>
                <div className='title'>Название фильма: {title}</div>
                <div className='title'>Дата сеанса: Завтра </div>
                <div className='title'>Время сеанса: {time.slice(0, 5)}</div>
                {data && data.sort((a, b) => a - b).map((value) => (
                    <div>Места : {value}</div>
                ))}</div>
        </div>
    );
}

export default modal;