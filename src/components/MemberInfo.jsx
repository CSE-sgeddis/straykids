import './../css/MemberInfo.css';

const MemberInfo = ({ member }) => {
  return (
    <div className="member-info active">
      <h2>{member.name}</h2>

      <div className="member-stats">
        <div className="stat-item">
          <div className="stat-label">Position</div>
          <div className="stat-value">{member.position}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Birthday</div>
          <div className="stat-value">{member.birthday}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Height</div>
          <div className="stat-value">{member.height}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Nationality</div>
          <div className="stat-value">{member.nationality}</div>
        </div>
      </div>

      <h3>About</h3>
      <p>{member.about}</p>
      {member.about2 && <p>{member.about2}</p>}

      <h3>Career Highlights</h3>
      <p>{member.careerHighlights}</p>

      <h3>Fun Facts</h3>
      <p>{member.funFacts}</p>
    </div>
  );
};

export default MemberInfo;