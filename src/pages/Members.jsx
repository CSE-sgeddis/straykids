import {useState, useEffect} from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import MemberCard from './../components/MemberCard';
import MemberInfo from './../components/MemberInfo';
import './../css/Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch members from JSON file
    fetch('https://cse-sgeddis.github.io/csce242/projects/part6/json/members.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        return response.json();
      })
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading members:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="members-page">
        <Header title="MEMBERS" />
        <main>
          <div className="loading">Loading members...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="members-page">
        <Header title="MEMBERS" />
        <main>
          <div className="error">Error: {error}</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="members-page">
      <Header title="MEMBERS" />
      
      <main className="members-layout">
        <section className="profile-images" id="profileImagesContainer">
          {members.map((member, index) => (
            <MemberCard
              key={member._id}
              member={member}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </section>
        
        <section className="member-content" id="memberContentContainer">
          {members.length > 0 && <MemberInfo member={members[activeIndex]} />}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Members;