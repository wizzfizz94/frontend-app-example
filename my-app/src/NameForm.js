import { useNavigate, useParams } from "react-router-dom";


function NameForm({ setNameHandler }) {
  const navigate = useNavigate();


  return (
    <form onSubmit={e => {
      console.log("sumbit");
      navigate("/search");
      e.preventDefault();
    }}>
      <input onChange={e => setNameHandler(e.target.value)} placeholder="Enter your name" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
