import "../style/components/BoardMemberCard.css";
import { ReactComponent as Telegram } from "../assets/icons/telegram.svg";
import { ReactComponent as MailBlack } from "../assets/icons/mailBlack.svg";

interface IBoardMemberCardProps {
  title: string;
  name: string;
  email: string;
  telegram: string;
}

export const BoardMemberCard = (props: IBoardMemberCardProps) => {
  const { name, title, email, telegram } = props;

  return (
    <div className="board-member-card">
      <img src="../assets/images/other/blank-profile-picture-973461_1280.png"></img>
      <span className="board-member-name">{name}</span>
      <span className="board-member-title">{title}</span>
      <span className="board-member-email"><MailBlack />{email}</span>
      <span className="board-member-telegram"><Telegram />{telegram}</span>
    </div>
  );
};
