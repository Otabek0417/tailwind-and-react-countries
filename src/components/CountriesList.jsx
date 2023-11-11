import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CountriesList() {
  const { data } = useGlobalContext();
  return (
    <div className="mt-10">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((country) => {
            const {
              name: { common },
              population,
              region,
              flags: { svg },
              cca2,
              capital,
            } = country;
            return (
              <li key={common}>
                <Link to={`/about/${cca2}`} className="w-full">
                  <div className="card w-92 bg-base-100 shadow-xl ">
                    <figure>
                      <img
                        className="h-[200px] object-cover"
                        src={svg}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Name:<span className="font-normal">{common}</span>
                      </h2>
                      <div className="text-xl">
                        <p>
                          <span className="font-semibold text-lg">
                            Population:
                          </span>
                          {population.toLocaleString("en-US")}
                        </p>
                        <p>
                          <span className="font-semibold  text-lg">
                            Region:
                          </span>
                          {region}
                        </p>
                        <p>
                          <span className="font-semibold text-lg">
                            Capital:
                          </span>
                          {capital}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CountriesList;
