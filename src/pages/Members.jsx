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
      name: "Changbin",
      memberId: "changbin",
      img_name: "/images/members/changbin.jpg",
      position: "Main Rapper, Vocalist, Producer",
      birthday: "August 11, 1999",
      height: "167 cm (5'6\")",
      nationality: "Korean",
      about: "Seo Chang-bin is Stray Kids' main rapper and one of the most versatile performers in the group. As part of the production unit 3RACHA alongside Bang Chan and Han, Changbin has contributed to writing and producing most of Stray Kids' discography. His rapid-fire rap delivery and clever wordplay have earned him recognition as one of K-pop's most skilled rappers.",
      about2: "",
      careerHighlights: "Changbin was a trainee for about two years before debuting with Stray Kids. As a member of 3RACHA, he's been instrumental in creating the group's unique sound. His solo work includes the mixtape 'DOODLE,' showcasing his artistic range. He's known for his ability to seamlessly switch between aggressive rap verses and melodic vocal parts.",
      funFacts: "Changbin is known for his love of exercise and maintaining his physique, often sharing workout content with fans. Despite his tough rapper image on stage, he's incredibly soft-hearted and emotional. He has a distinctive laugh that fans adore and is known for his playful interactions with the other members, especially his 'married couple' dynamic with Hyunjin."
    },
    {
      _id: 4,
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
    },
    {
      _id: 5,
      name: "Han",
      memberId: "han",
      img_name: "/images/members/hannie.jpeg",
      position: "Main Rapper, Vocalist, Producer",
      birthday: "September 14, 2000",
      height: "169 cm (5'7\")",
      nationality: "Korean",
      about: "Han Ji-sung is Stray Kids' main rapper, vocalist, and the final member of the production trio 3RACHA. Known for his incredibly fast rap delivery and emotional vocal performances, Han is considered one of the most talented all-rounders in K-pop. His ability to seamlessly transition between aggressive rap and beautiful vocals sets him apart as an artist.",
      about2: "",
      careerHighlights: "Han trained for about three years before debuting with Stray Kids. As a member of 3RACHA, he's been involved in creating most of the group's music, contributing both lyrics and production. His solo work showcases his range, from introspective tracks to high-energy rap songs. He's known for his honest and personal lyrics that resonate deeply with fans.",
      funFacts: "Han is known for his love of cheesecake and often mentions it in variety shows and interviews. He's incredibly close with the other members and is known for his cute and sometimes chaotic personality. Despite his confident stage presence, he can be shy in new situations. He has a pet dog named BBAMA and often shares cute photos of his furry friend with fans."
    },
    {
      _id: 6,
      name: "Felix",
      memberId: "felix",
      img_name: "/images/members/felix.jpeg",
      position: "Lead Dancer, Rapper, Vocalist",
      birthday: "September 15, 2000",
      height: "171 cm (5'7\")",
      nationality: "Australian-Korean",
      about: "Lee Felix is known for his deep voice, incredible dance skills, and warm personality. Born in Australia, Felix brings a unique perspective to the group with his bilingual abilities and international background. His distinctive deep voice contrasts beautifully with his bright, cheerful personality, making him one of the most beloved members among fans worldwide.",
      about2: "",
      careerHighlights: "Felix was eliminated from the Stray Kids survival show but was brought back due to his potential and the strong fan support. This experience taught him resilience and made him even more determined to succeed. His deep voice has become one of Stray Kids' signature sounds, and his dance performances are consistently praised for their precision and energy.",
      funFacts: "Felix is famous for his love of baking and often makes brownies for the other members and staff. His sunshine personality has earned him the nickname 'sunshine Felix' among fans. He's fluent in English and Korean, often helping with international communications. Despite his deep voice, he has the brightest smile and most positive energy, making him a mood-maker for the group."
    },
    {
      _id: 7,
      name: "Seungmin",
      memberId: "seungmin",
      img_name: "/images/members/seungmin.jpg",
      position: "Main Vocalist",
      birthday: "September 22, 2000",
      height: "178 cm (5'10\")",
      nationality: "Korean",
      about: "Kim Seung-min is Stray Kids' main vocalist, known for his clear, stable voice and incredible vocal range. His voice serves as the foundation for many of Stray Kids' most emotional and powerful songs. Seungmin is also known for his wit, intelligence, and his role as one of the group's most reliable members both on and off stage.",
      about2: "",
      careerHighlights: "Seungmin trained for about two years before debuting with Stray Kids. His vocal skills have consistently improved over the years, and he's become known for his ability to hit high notes and deliver emotional performances. He's also shown growth as a performer, developing his dance skills and stage presence to complement his outstanding vocals.",
      funFacts: "Seungmin is known for his love of baseball and photography. He often takes photos of the other members and shares them with fans. He's also known for his quick wit and savage comments that keep the other members on their toes. Despite his sometimes mischievous personality, he's incredibly hardworking and dedicated to improving his craft."
    },
    {
      _id: 8,
      name: "I.N",
      memberId: "jeongin",
      img_name: "/images/members/i.n.jpg",
      position: "Vocalist, Maknae",
      birthday: "February 8, 2001",
      height: "172 cm (5'8\")",
      nationality: "Korean",
      about: "Yang Jeongin, known by his stage name I.N, is the youngest member (maknae) of Stray Kids and a talented vocalist. Despite being the youngest, I.N has shown remarkable growth and maturity throughout his career. His sweet vocals and charming personality have made him a fan favorite, and he's proven that age is just a number when it comes to talent and professionalism.",
      about2: "",
      careerHighlights: "I.N was one of the youngest trainees at JYP Entertainment and trained for about two years before debuting with Stray Kids. His vocal skills have developed tremendously since debut, and he's taken on more significant parts in the group's songs. His stage presence has grown substantially, and he's become more confident as a performer with each comeback.",
      funFacts: "I.N is known for his love of fashion and often experiments with different styles. He's also known for his bright smile and infectious laughter that can lift the mood of any room. As the maknae, he's often spoiled by the older members, but he's also shown his mature side when needed. He has a great relationship with all the members and is known for his respectful and kind nature."
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