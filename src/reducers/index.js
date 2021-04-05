const initialState = {
    //prop เก็บข้อมูลที่ดึงมาจาก API
    userData: {},
    isFetching: false,
    isError: false
}


const asyncReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER":
            return state = { ...state,
                isFetching: true,
                userData: {},
                isError: false
            }
        case "FETCHED_USER":
            return state = { ...state,
                userData: action.data,
                isFetching: false,
                isError: false
            }
        case "RECEIVE_ERROR":
            return state = { ...state,
                isError: true,
                isFetching: false
            }
        default:
            return state;
    }
}

export default asyncReducer