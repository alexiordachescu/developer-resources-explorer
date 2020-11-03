import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../store/resources/actions";

export default function AddResourceForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();

    dispatch(addResource(name, type, tags.split(/[, ]+/), url));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add a new resource</h2>
        <p>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="library">library</option>
            <option value="website">website</option>
            <option value="cheatsheet">cheatsheet</option>
            <option value="resource">resource</option>
            <option value="tool">tool</option>
          </select>
        </p>
        <p>
          <label>Tags (comma and/or space-separated)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} />
        </p>
        <p>
          <label>URL</label>
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
        </p>
        <button type="submit">Add this resource!</button>
      </form>
    </div>
  );
}
