export function fetchDataSuccess(fetchData){
    return {
        type: "FETCH_DATA_SUCCESS",
        fetchData
    }
}


export function fetchData (url, options) {
    return (dispatch) => {
        fetch(url, options)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(fetchData => dispatch(fetchDataSuccess(fetchData)))
    }
}