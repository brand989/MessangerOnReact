const initState = {

};

const dataProfile = () => {
    let data

    fetch('/api/profile.json')
    .then(response => response.json())
    .then(response => {
        initState.name = response.name
        initState.age = response.age
    })
    .catch(err => console.log('err', err))
    return data
}

export default function profileReducer(store = initState, action) {
    dataProfile()
    return store;
    
}; 