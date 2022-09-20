import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Uh oh!! looks like you are lost...</h2>
      <Link to="/">Back to home??</Link>
    </div>
  );
};
export default NotFound;
