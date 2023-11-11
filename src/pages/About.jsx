import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import AboutList from "../components/AboutList";
function About() {
  const { id } = useParams();
  const url = `https://restcountries.com/v3.1/alpha/${id}`;
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      {isPending && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>}
      <div className="container pt-20">
        <Link to="/">
          <button className="btn btn-outline btn-primary">
            <img src="../../public/back.svg" alt="back" />
            <span className="font-normal text-sm">Back</span>
          </button>
        </Link>
        <AboutList data={data} />
      </div>
    </>
  );
}

export default About;
