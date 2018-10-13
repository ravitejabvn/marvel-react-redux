export default function getCharaters(state = {}, action){
    switch(action.type) {
        case 'GET_CHARACTERS' : 
            return Object.assign({}, state, {
                characters: action.characters
            });
        case 'GET_CHARS_BY_ID' :
            return Object.assign({}, state, {
                characterById: action.characterId
            });
    }
    return state;
}