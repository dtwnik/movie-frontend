const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const Card = ({ data }) => {
    let year = data.premiere_date ? data.premiere_date.split("-")[0] : 0;
    let month = data.premiere_date ? data.premiere_date.split("-")[1] : 0;
    let day = data.premiere_date ? data.premiere_date.split("-")[2] : 0;

    const getMonth = () => {
        let result;
        months.forEach((m, i) => {
            if (Number(month) - 1 === i) {
                result = m;
            }
        });
        return result;
    };
    let newMonth = getMonth();
    return (
        <div>
            <div className="box-img">
                <img src={data.photo} alt="" />
            </div>
            <h3>{data.title}</h3>
            <span>{data.duration} мин | {day + "  " + newMonth + "  " + year}</span>
        </div>
    );
}

export default Card;