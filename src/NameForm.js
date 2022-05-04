import { useNavigate } from "react-router-dom";

function NameForm({ setNameHandler }) {
  const navigate = useNavigate();

  return (
    <form onSubmit={e => {
      console.log("sumbit");
      navigate("/search");
      e.preventDefault();
    }}>
      <input className="input" onChange={e => setNameHandler(e.target.value)} placeholder="Enter your name" />
      <input className="button" type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
