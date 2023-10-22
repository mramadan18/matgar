import helpImg from "../../../../../public/img for salla/homePage/Group 97.png";
import laptopPhoto from "../../../../../public/img for salla/homePage/icons8-laptop-50.png";
import MenuLink from "./MenuLink";
import CardLinks from "./CardLinks";

const EducationLink = () => {
  return (
    <MenuLink linkName="التعليم" linkPath="/#">
      <CardLinks
        path={"/help-center"}
        head={"مركز المساعدة"}
        subHead={"مكتبة متكاملة لكل ما تحتاجه لبدء تجارتكل مع متجر"}
        img={helpImg}
      />
      <CardLinks
        path={"/academy"}
        head={"أكاديمية متجر"}
        subHead={"بدايتك المتكاملة لإتقان مبادئ التجارة وفنونها"}
        img={laptopPhoto}
      />
    </MenuLink>
  );
};

export default EducationLink;
