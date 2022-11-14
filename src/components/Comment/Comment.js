import "./comment.css";
export default function Comment({ name, email }) {
  return (
      <div className="comment" >
        <p>name: {name}</p>
        <p>email: {email}</p>        
      </div>
  );
}
