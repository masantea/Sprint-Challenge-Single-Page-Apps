import React, { useState } from "react";

export default function SearchForm(props ) {
  return (
    <section className="search-form">
    <input placeholder="Search" type="text" value={props.value} onChange={props.onChange} />
    </section>
  );
}
