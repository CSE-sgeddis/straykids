import './../css/MemberCard.css';

const MemberCard = ({ member, isActive, onClick }) => {
  return (
    <a 
      href={`#${member.memberId}`}
      className={`profile-image ${isActive ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <img 
        src={member.img_name}
        width="80"
        height="80"
        alt={member.name}
      />
      <span>{member.name}</span>
    </a>
  );
};

export default MemberCard;