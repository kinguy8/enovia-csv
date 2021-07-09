import { FETCH_URL } from "../Constants/Constants"

const Reducer = (state, action) => {
    switch (action.type) {
        case FETCH_URL:
            return ({
                msg: "Файл успешно прочитан",
                url: action.payload,
            })
        default:
            return "None"
    }
}

export default Reducer