import './../css/MemberCard.css';

const MemberCard = ({ member, isActive, onClick }) => {
  return (
    <a 
      href={`#${member.memberId}`}
      className={`profile-image ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img 
        src={member.img_name}
        width="200"
        height="200"
        alt={member.name}
      />
      <span>{member.name}</span>
    </a>
  );
};

export default MemberCard;