import "../style/components/BoardMemberCard.css";

interface IBoardMemberCardProps {
  title: string;
  name: string;
  email: string;
  telegram?: string;
}

export const BoardMemberCard = (props: IBoardMemberCardProps) => {
  const { title, name, email, telegram } = props;

  return (
    <div className="board-member-card">
      <p className="board-member-title">{title}</p>
      <p className="board-member-name">{name}</p>
      <p className="board-member-email">{email}</p>
      <p className="board-member-telegram">{telegram}</p>
    </div>
  );
};
