import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "A SECITEX (Semana de Ciência, Tecnologia e Extensão) é um evento do IFRN que promove a integração entre ensino, pesquisa, extensão e inovação por meio de palestras, oficinas, minicursos, apresentações de trabalhos e atividades culturais, aproximando a instituição da comunidade."
            : "A SECITEX promove a divulgação científica, a inovação, a integração entre ensino, pesquisa e extensão, o protagonismo estudantil, a troca de conhecimentos e a aproximação entre o IFRN e a comunidade por meio de atividades acadêmicas, tecnológicas e culturais."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ocultar detalhes" : "Exibir detalhes"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;