import { useEffect } from "react";

const FilterButton = (props) => {
  const { id, setFilteredPrjects, allProjects } = props;
  useEffect(() => {
    if (id === "all") {
      setFilteredPrjects(allProjects);
      return;
    }
    const filter = allProjects.filter((projectItem) =>
      projectItem.id.includes(id)
    );
    setFilteredPrjects(filter);
  }, [id]);

  return (
    <>
      <button
        className={`${id === "all" ? "active" : ""} btn--filter`}
        onClick={() => props.setId("all")}
      >
        All
      </button>
      <button
        className={`${id === "css" ? "active" : ""} btn--filter`}
        onClick={() => props.setId("css")}
      >
        HTML&CSS
      </button>
      <button
        className={`${id === "javascript" ? "active" : ""} btn--filter`}
        onClick={() => props.setId("javascript")}
      >
        Javascript
      </button>
      <button
        className={`${id === "react" ? "active" : ""} btn--filter`}
        onClick={() => props.setId("react")}
      >
        ReactJs
      </button>
      <button
        className={`${id === "node" ? "active" : ""} btn--filter`}
        onClick={() => props.setId("node")}
      >
        NodeJs
      </button>
    </>
  );
};

export default FilterButton;
