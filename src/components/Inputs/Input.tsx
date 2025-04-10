import './Input.css'

export default function Input() {

  const label = "Testando para ver se funciona";

  return (
    <div className="input-container">
      <label htmlFor="input" className='input'>{label}</label>
      <input type="text" id="input" className="input-field" />
    </div>
  );
}
