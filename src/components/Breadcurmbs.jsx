import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcurmbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);
  // console.log(pathnames)

  let breadcrumbsPath = "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
              alignItems: "center",
              height: '3rem',
              fontSize: '2rem',
              marginLeft: '3rem',
        padding:'1rem',
      }}
    >
      {pathnames.length > 0 && (
        <Link style={{ textDecoration: "none",color:'black' }} to={"/"}>
          Home
        </Link>
      )}
      {pathnames.map((name, ind) => {
        breadcrumbsPath += `/${name}`;
        const isLast = ind === pathnames.length - 1;
        return isLast ? (
          <span key={breadcrumbsPath}> / {name}</span>
        ) : (
          <span key={breadcrumbsPath}>
            /{" "}
            <Link style={{ textDecoration: "none" ,color:'black'}} to={breadcrumbsPath}>
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcurmbs;
