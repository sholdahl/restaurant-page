const clearPage = () => {

    while (contentHolder.firstChild) {
        contentHolder.removeChild(contentHolder.firstChild);
    }
}

export default clearPage