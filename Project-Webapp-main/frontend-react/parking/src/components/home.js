// var perf = require('../index.html');
import {Link} from "react-router-dom";

function Home(){
    return (
        <>
        <h3>Hello World</h3>
        <Link to="/parking">Booking</Link>
        </>
    )
}
export default Home;