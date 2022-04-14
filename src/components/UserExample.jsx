import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUserAsync} from "../slices/userSlice";

const UserExample = () => {
    const [username, setUsername] = useState("");
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const onViewUserClick = () => {
        // fetch(`/api/users/${username}`) => user valid ?
        dispatch(setUserAsync(username));
        // eroare
    }

    return (
        <div>
            <h1>User: {user?.username}</h1>
            <input type="text" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={onViewUserClick}>View User</button>
            {/*<div style={{textAlign: "left", fontSize: "1.5rem"}}>*/}
            {/*{*/}
            {/*    Object.keys(user).map(key => {*/}
            {/*        if (typeof user[key] !== "object") {*/}
            {/*            return <div key={key}><b>{key}</b>: {user[key]}</div>*/}
            {/*        } else if (key === "repos") {*/}
            {/*            return <div key={key}><b>{key}</b>: <ul>{user[key].map(repo => <li key={repo.id}>{repo.name}</li>)}</ul></div>*/}
            {/*        }*/}
            {/*        return <></>*/}
            {/*    })*/}
            {/*}*/}
            {/*</div>*/}
        </div>
    );
};

export default UserExample;
