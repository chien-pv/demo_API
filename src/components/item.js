function Item({ id, name, status }) {
  let check = status ? "checked" : "";
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            defaultChecked={check}
          />
        </div>
      </td>
      <td>
        <button type="button" className="btn btn-outline-primary">
          Detail
        </button>
        <button type="button" className="btn btn-outline-danger">
          Edit
        </button>
        <button type="button" className="btn btn-outline-info">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
