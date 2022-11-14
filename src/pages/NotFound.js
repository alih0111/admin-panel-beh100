import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <p>
        404
        <br />
        the page not found
      </p>
      <Link to="/">go to home page</Link>
    </>
  );
}
