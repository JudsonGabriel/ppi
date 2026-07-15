import NoticeCard from "./NoticeCard";
import "./NoticeList.css";

function NoticeList({ notices, onToggleFeatured, onDeleteNotice }) {
  return (
    <main>
      <h2>Mural Digital do IFRN - Campus Macau</h2>

      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          notice={notice}
          onToggleFeatured={onToggleFeatured}
          onDeleteNotice={onDeleteNotice}
        />
      ))}
    </main>
  );
}

export default NoticeList;