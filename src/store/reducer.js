export default function ImageReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_IMAGES': return { ...state, theme: action.data }


        default: return state

    }

}