import Comment from "../Comment/Comment";
// import FullComment from "../FullComment/FullComment";
// import NewComment from "../../components/NewComment/NewComment";

import { getAllComments } from "../../services/getAllCommentService";
import "./Comments.css";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CommentsList() {
  const [Comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComments = () => {
    let rederedValue = <p>Loading...</p>;
    if (error) {
      rederedValue = <p>fetching data failed !</p>;
      // toast.error("there is an error");
    }

    if (Comments && !error) {
      rederedValue = Comments.map((c) => (
        <Link to={`/full-comment/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
            // onClick={() => selectCommentHandler(c.id)}
          />
        </Link>
      ));
    }
    return rederedValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        {/* <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        /> */}
      </section>
      {/* <section>
        <NewComment setComments={setComments} />
      </section> */}
    </main>
  );
}
