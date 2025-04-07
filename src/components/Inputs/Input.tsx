import './Input.css'

export default function Input() {

  const label = "Input Label";

  return (
    <div className="input-container">
      <label htmlFor="input" className='input'>{label}</label>
      <input type="text" id="input" className="input-field" />
    </div>
  );
}
