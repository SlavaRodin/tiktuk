export function fetchData(state = [], action) {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return action.fetchData;
        default:
            return state;
    }
}
