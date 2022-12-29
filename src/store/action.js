function setImage(theme) {
    console.log("Reducer=> ",theme)
    console.log(theme);
    return {

        type: 'SET_IMAGES',

        data: Images

    }

}

export {
    setImage
}