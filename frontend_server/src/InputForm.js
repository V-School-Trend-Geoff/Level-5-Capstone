export const Form = (props) => {
  const {instrument: {_id, Volume, Book, Page, RecDt, InstType}} = props;
console.log(_id);

  return <form>
    <div className="input-field">{Volume}</div>
    <div className="input-field">{Book}</div>
    <div className="input-field">{Page}</div>
    <div className="input-field">{RecDt}</div>
    <div className="input-field">{InstType}</div>

    <button >View / Edit</button>
    <button>Delete</button>
  </form>
};