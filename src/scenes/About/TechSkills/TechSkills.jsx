import s from "./TechSkills.module.scss";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiBootstrap,
  SiGithub,
  SiFigma,
  SiShopify,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={s.container}>
      {/* FRONT TOOLS */}
      <li className={s.techIcon}>
        <DiJavascript1 className={s.icon}  />
        <p className={s.title}>JavaScript</p>
      </li>

      <li className={s.techIcon}>
        <SiTypescript className={s.icon}  />
        <p className={s.title}>TypeScript</p>
      </li>

      <li className={s.techIcon}>
        <DiReact className={s.icon}  />
        <p className={s.title}>ReactJs</p>
      </li>
      <li className={s.techIcon}>
        <SiRedux className={s.icon}  />
        <p className={s.title}>Redux</p>
      </li>
      <li className={s.techIcon}>
        <DiSass className={s.icon}  />
        <p className={s.title}>SASS</p>
      </li>
      <li className={s.techIcon}>
        <SiBootstrap className={s.icon}  />
        <p className={s.title}>Bootstrap</p>
      </li>
      <li className={s.techIcon}>
        <SiFigma className={s.icon}  />
        <p className={s.title}>Figma</p>
      </li>
      
      <li className={s.techIcon}>
        <SiNextdotjs className={s.icon}  />
        <p className={s.title}>Nextjs</p>
      </li>
      <li className={s.techIcon}>
        <SiWordpress className={s.icon}  />
        <p className={s.title}>Wordpress</p>
      </li>
      <li className={s.techIcon}>
        <SiShopify className={s.icon}  />
        <p className={s.title}>Shopify</p>
      </li>

      <li className={s.techIcon}>
        <SiGithub className={s.icon} />
        <p className={s.title}>Github</p>
      </li>
      
    </ul>
  );
};

export default TechSkills;
