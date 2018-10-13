export function getCharaters(dispatch,characters){
    // console.log('actions',characters);
    dispatch({
        type : 'GET_CHARACTERS',
        characters
    })
}

export function getCharsById(dispatch,characterId){
    dispatch({
        type : 'GET_CHARS_BY_ID',
        characterId
    })
}