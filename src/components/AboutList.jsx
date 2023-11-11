import React from "react";
import { Link } from "react-router-dom";

function AboutList({ data }) {
  return (
    <>
      {data &&
        data.map((country) => {
          const {
            name: { nativeName, common },
            population,
            region,
            flags: { svg },
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
          } = country;
          return (
            <div
              key={common}
              className="flex pt-14 justify-between items-center gap-11 "
            >
              <img
                className="w-[560px] h-[400px] object-cover rounded-[10px] mr-[20px]"
                src={svg}
                alt=""
              />
              <div className=" w-full max-w-[598px]">
                <h2 className="font-extrabold text-[32px] mb-6">{common}</h2>
                <ul className="flex items-start justify-between mb-[65px] ">
                  <li>
                    <p>
                      <b className="leading-8">Native name: </b>
                      <span>{Object.values(nativeName)[0].official}</span>
                    </p>
                    <p>
                      <b className="leading-8">Population: </b>
                      <span>{population.toLocaleString("en-US")}</span>
                    </p>
                    <p>
                      <b className="leading-8">Region: </b>{" "}
                      <span>{region}</span>
                    </p>
                    <p>
                      <b className="leading-8">Sub Region: </b>
                      <span>{subregion}</span>
                    </p>
                    <p>
                      <b className="leading-8">Capital: </b>
                      <span>{capital ? capital : "No capital"}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="leading-8"> Top Level Domain: </b>{" "}
                      <span>{tld[0]}</span>
                    </p>
                    <p>
                      <b className="leading-8"> Currencies: </b>
                      <span>{Object.values(currencies)[0].name}</span>
                    </p>
                    <p>
                      <b className="leading-8">Languages: </b>
                      <span>
                        {Object.values(languages).toLocaleString("en-US")}
                      </span>
                    </p>
                  </li>
                </ul>
                <div>
                  <h3 className="text-[16px] font-semibold">
                    Border Countries:
                    {borders
                      ? borders.map((border) => {
                          return (
                            <Link
                              key={border}
                              className=""
                              to={`/about/${border}`}
                            >
                              <button className="btn-sm rounded duration-75 translate-x-2  btn-outline btn-success">
                                {border}
                              </button>
                            </Link>
                          );
                        })
                      : "No borders"}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default AboutList;
