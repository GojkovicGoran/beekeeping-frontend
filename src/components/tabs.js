import React from "react";
import FilterLink from "../containers/filterLink";

const Tabs = () => (
    <div className="d-flex justify-content-center">
        <FilterLink filter="TODAY">
            <h5>Today</h5>
        </FilterLink>
        <FilterLink filter="TOMORROW">
            <h5>Tomorrow</h5>
        </FilterLink>
    </div>
);

export default Tabs;
