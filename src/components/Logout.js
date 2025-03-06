import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Logout = () => {
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>You are logged in!</h2>
            <button onClick={() => dispatch(logout())} style={styles.button}>Logout</button>
        </div>
    );
};

const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        marginBottom: "20px",
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#FF3B30",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default Logout;

