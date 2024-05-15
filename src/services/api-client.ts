import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4194820102ab442b982f5df43f479041'
    }
})