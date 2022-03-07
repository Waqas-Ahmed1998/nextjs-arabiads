import Acard1 from '../../components/about/Acard1';
import Acard2 from '../../components/about/Acard2';
import Campaign from '../../components/standard/Campaign';
import NumbersSpeak from '../../components/standard/NumbersSpeak';
import Plateforms from '../../components/standard/Plateforms';
import styles from '../../styles/Home.module.css';

function About() {
  return (
    <>
      <div className=' hidden absolute  -left-[0%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>
      <div className={`relative overflow-hidden xl:mt-20`}>
        <div className={`max-w-screen-xl mx-auto  xl:space-y-10`}>
          <Acard1 />
          <Acard2 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign />
      </div>
    </>
  );
}

export default About;
