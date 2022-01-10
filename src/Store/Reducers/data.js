const initial_state = {
    data: {},
    userData:[],
    printData:[],
    isLoggedIn:false,
    isRegister:false,
    images:[],
    header:"",
    checkLIst:[],
    dodValue:[]
}

export default function facebookReducer(state = initial_state, action) {
    switch (action.type) {       
        case "UPDATEDATA": {
            return { 
                ...state,
                printData: state.printData.map((existingLink, currentIndex) => action.index === currentIndex ? action.data : existingLink),
                isLoggedIn:true

            }
        }
        default:
            return initial_state
    }
}