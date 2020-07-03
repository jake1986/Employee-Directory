import axios from "axios";

const url = "https://randomuser.me/api/?results=30"

function getUsers() {
    return axios.get(url);
}

export default getUsers;