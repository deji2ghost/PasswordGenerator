export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQD24eiK9sb-s0Uhozy67y1RHPqO0Kne1Gmd8DIkn95-qFBAk-xhG1yJWSalCF2z1rg3BJ1V9ohVLyd8y7NdbOdWjLaXD3hVCjtya3ZFItYpxpAsuHyc2IZBBbTNolamfIq5FTuifY24gYlSpOhjgWg5W4MJlakmWewoQgG2BnlitChIuWWMUhzEQGca69g-MdZn2C4W7mWSxvnC'
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
} 

export default reducer