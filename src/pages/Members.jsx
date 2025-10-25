import {useState} from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import MemberCard from './../components/MemberCard';
import MemberInfo from './../components/MemberInfo';
import './../css/Members.css';

const Members = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Hard-coded member data (will be from JSON later)
  const members = [
    {
      _id: 1,
      name: "Bang Chan",
      memberId: "bangchan",
      img_name: "/images/members/channie.jpeg",
      position: "Leader, Producer, Vocalist, Rapper",
      birthday: "Oct 3, 1997",
      height: "171 cm",
      nationality: "Australian",
      about: "Christopher Bang, known professionally as Bang Chan, is the leader and main producer of Stray Kids. Born in Sydney, Australia, he moved to South Korea as a JYP Entertainment trainee at age 13. Chan is known for his exceptional leadership skills, musical talent, and caring personality that earned him the nickname 'Dad' among fans.",
      about2: "As the leader, Bang Chan takes care of all the members and is deeply involved in the group's music production. He's fluent in English and Korean, often serving as a translator for international fans. His dedication to music began early, and he taught himself to produce music during his trainee years.",
      careerHighlights: "Bang Chan was a trainee for 7 years before debuting with Stray Kids in 2018. He was personally chosen by JYP to form and lead the group. As part of the producing unit 3RACHA, he has contributed to writing and producing most of Stray Kids' discography. He also hosts the weekly live broadcast 'Chan's Room' where he interacts directly with fans.",
      funFacts: "Bang Chan is known for his love of sports, especially swimming and boxing. He's also a huge fan of Deadpool and often references the character. Despite being the leader, he's known for his playful and sometimes chaotic personality. He has a younger sister named Hannah and a brother named Lucas, both of whom occasionally appear in his content."
    },
    {
      _id: 2,
      name: "Lee Know",
      memberId: "leeknow",
      img_name: "/images/members/leeknow.jpeg",
      position: "Main Dancer, Vocalist, Rapper",
      birthday: "October 25, 1998",
      height: "172 cm (5'8\")",
      nationality: "Korean",
      about: "Lee Min-ho, professionally known as Lee Know, is Stray Kids' main dancer and a talented vocalist. Before joining Stray Kids, he was a backup dancer for BTS and other major K-pop acts. His dance skills are exceptional, and he's known for his precise and powerful performances that captivate audiences worldwide.",
      about2: "",
      careerHighlights: "Lee Know joined JYP Entertainment and was added to Stray Kids during the survival show. His experience as a professional backup dancer gave him a strong foundation. He's known for his choreography contributions and his ability to adapt to any dance style, from powerful hip-hop to graceful contemporary.",
      funFacts: "Lee Know is a devoted cat dad to his three cats: Soonie, Doongie, and Dori. He's known for his dry humor and savage comments that make the other members laugh. Despite his sometimes aloof exterior, he's incredibly caring and is often seen taking care of the younger members."
    },
    {
      _id: 3,
      name: "Hyunjin",
      memberId: "hyunjin",
      img_name: "/images/members/hyunjin.jpeg",
      position: "Main Dancer, Rapper, Vocalist, Visual",
      birthday: "March 20, 2000",
      height: "179 cm (5'10\")",
      nationality: "Korean",
      about: "Hwang Hyun-jin is Stray Kids' main dancer, visual, and one of the most recognizable faces of the group. Known for his exceptional dance skills and artistic sensibilities, Hyunjin brings grace and power to every performance. He's also a talented rapper and vocalist, showcasing incredible versatility across different musical styles.",
      about2: "",
      careerHighlights: "Hyunjin was scouted by JYP Entertainment and trained for about two years before debut. His dance performances consistently go viral, and his solo dance videos have garnered millions of views. He's collaborated with renowned choreographers and has been praised for his ability to convey emotion through movement. His artistic talents extend beyond performance to visual arts and poetry.",
      funFacts: "Hyunjin is passionate about art and often shares his paintings and drawings with fans. He's known for his love of poetry and literature, often incorporating artistic references into his work. Despite being known for his stunning visuals, he's humble and hardworking. He has a playful personality and is known for his dramatic reactions and expressions that entertain both fans and fellow members."
    }
  ];

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
          <MemberInfo member={members[activeIndex]} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Members;