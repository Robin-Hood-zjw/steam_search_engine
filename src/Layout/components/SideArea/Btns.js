export const Btn1 = () => {
    return (
        <Button className="popup-button" type="primary" >
            {/* <a href="https://game-sothis-backend.herokuapp.com/api/auth/steam"> Sign in</a> */}
            <FontAwesomeIcon icon={faSteam} />
            <a href="http://localhost:3080/api/auth/steam"> Sign in</a>
    
        </Button>
    );
}

export const Btn2 = () => {
    return (
        <Button className="popup-button" >
            {/* <a href="https://game-sothis-backend.herokuapp.com/logout">Sign out</a> */}
            <a href="http://localhost:3080/logout">Sign out</a>
        </Button>
    );
}