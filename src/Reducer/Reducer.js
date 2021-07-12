import { FETCH_URL, NEXT_PAGE, CHART, FILTER_DATA, PREV_PAGE, OPEN_ALERT, CLOSE_ALERT } from "../Constants/Constants"

const Reducer = (state, action) => {
    console.log("action is ", action)
    switch (action.type) {
        case FETCH_URL:
            return ({
                msg: "Файл успешно прочитан",
                url: action.payload.url,
                data: {
                    "header": action.payload.header,
                    "content": action.payload.content
                },
                isNextOpen: false

            })
        case NEXT_PAGE:
            return ({
                msg: action.payload.msg,
                url: action.payload.url,
                data: action.payload.data,
                isNextOpen: true
            })
        case CHART:
            return ({
                msg: action.payload.msg,
                url: action.payload.url,
                data: action.payload.data,
                isNextOpen: true,
                chartType: CHART,
                posX: action.payload.positionX,
                posY: action.payload.positionY
            })
        case FILTER_DATA:
            return ({
                msg: action.payload.msg,
                url: action.payload.url,
                data: action.payload.data,
                isNextOpen: true,
                axisX: "",
                axisY: ""
            })
        case PREV_PAGE:
            return ({
                msg: action.payload.msg,
                url: action.payload.url,
                data: action.payload.data,
                isNextOpen: false
            })
        case OPEN_ALERT:
            return ({
                ...state,
                alertState: true,
                alertMsg: action.payload
            })
        case CLOSE_ALERT:
            return ({
                ...state,
                alertState: false
            })
        default:
            return "None"
    }
}

export default Reducer