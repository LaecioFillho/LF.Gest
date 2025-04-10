import './Modal.css';

interface ModalProps {
  title: string;
  openModal: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}

export default function Modal({ title, openModal, onClose}: ModalProps) {

  if (!openModal) {
    return null;
  }

  return (
      <div className="modal">
        <div className="modal-content">
          <h2 className="title-h1">{title}</h2>

          <div className='btn-container'>
            <button
              onClick={() => {onClose()}}>
              <span className="btn-text">Fechar</span>
            </button>
            <button
              >
              <span className="btn-text">Salvar</span>
            </button>
          </div>

        </div>
      </div>
    );
}
