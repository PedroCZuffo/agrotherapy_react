import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaInfoCircle } from "react-icons/fa";

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    experiencia: "",
    curriculo: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateField = (id, value) => {
    switch (id) {
      case "nome":
        if (!value.trim() || value.trim().split(" ").length < 2)
          return "Informe o nome completo.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "E-mail inválido.";
        break;
      case "telefone":
        if (!/^\d{10,11}$/.test(value.replace(/\D/g, "")))
          return "Telefone inválido.";
        break;
      case "experiencia":
        if (value.trim().length < 30)
          return "Descreva sua experiência com no mínimo 30 caracteres.";
        break;
      case "curriculo":
        if (!value)
          return "Anexe seu currículo.";
        break;
      default:
        return null;
    }
    return null;
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    const newValue = files ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [id]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, newValue),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Verifique os erros no formulário.");
      return;
    }

    setIsSubmitted(true);
    toast.success("Dados enviados com sucesso! Obrigado pelo interesse.");
  };

  return (
    <main id="main-content" className="container my-5" role="main">
      <div className="d-flex align-items-center mb-3">
        <h1 className="section-title mb-0 me-2">Trabalhe Conosco</h1>
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={() => setShowModal(true)}
          title="Mais informações"
        >
          <FaInfoCircle size={20} />
        </button>
      </div>

      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          <h2 className="alert-heading h4">Dados enviados com sucesso!</h2>
          <p>Recebemos seu interesse com os seguintes dados:</p>
          <ul>
            <li><strong>Nome:</strong> {formData.nome}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Telefone:</strong> {formData.telefone}</li>
            <li><strong>Experiência:</strong> {formData.experiencia}</li>
            <li><strong>Currículo:</strong> {formData.curriculo?.name}</li>
          </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="mb-4">Cadastro para Terapeutas</h2>

          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome Completo*</label>
            <input type="text" className={`form-control ${errors.nome ? 'is-invalid' : ''}`} id="nome" value={formData.nome} onChange={handleChange} />
            {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail*</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">Telefone*</label>
            <input type="tel" className={`form-control ${errors.telefone ? 'is-invalid' : ''}`} id="telefone" value={formData.telefone} onChange={handleChange} />
            {errors.telefone && <div className="invalid-feedback">{errors.telefone}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="experiencia" className="form-label">Experiência Profissional*</label>
            <textarea className={`form-control ${errors.experiencia ? 'is-invalid' : ''}`} id="experiencia" rows="4" value={formData.experiencia} onChange={handleChange} />
            <div className="form-text">{formData.experiencia.length}/500 caracteres</div>
            {errors.experiencia && <div className="invalid-feedback">{errors.experiencia}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="curriculo" className="form-label">Currículo (PDF)*</label>
            <input type="file" className={`form-control ${errors.curriculo ? 'is-invalid' : ''}`} id="curriculo" accept=".pdf" onChange={handleChange} />
            {errors.curriculo && <div className="invalid-feedback">{errors.curriculo}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Enviar Dados</button>
        </form>
      )}

      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 1055 }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sobre a Contratação</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Buscamos profissionais comprometidos, com empatia e experiência em atendimento terapêutico.</p>
                  <p>É desejável:</p>
                  <ul>
                    <li>Formação comprovada na área de atuação</li>
                    <li>Experiência com atendimento a pacientes</li>
                    <li>Boa comunicação e ética profissional</li>
                    <li>Disponibilidade mínima de 45 horas semanais</li>
                  </ul>
                  <p>Você pode anexar seu currículo em PDF. Entraremos em contato se o perfil for compatível.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default WorkWithUs;
