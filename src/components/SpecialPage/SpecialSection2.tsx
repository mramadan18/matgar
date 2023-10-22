import SpecailCard2 from "./SpecailCard2";
import moneyPhoto from "../../../public/img for salla/homePage/icons8-money-30.png";
import store from "../../../public/img for salla/SpecialEcommercePage/icons8-storehouse-50.png";
import percentagePhoto from "../../../public/img for salla/SpecialEcommercePage/icons8-discount-50.png";
import infintePhoto from "../../../public/img for salla/SpecialEcommercePage/icons8-link-50.png";
import directionPhoto from "../../../public/img for salla/SpecialEcommercePage/icons8-transfer-50.png";
import report from "../../../public/img for salla/SpecialEcommercePage/icons8-report-50.png";

const SpecialSection2 = () => {
  return (
    <div className="anime-block home-block px-8">
      <div className="content-container">
        <div className="title title--hero w-full center mb-8 sm:mb-12">
          <h2>خدمات متجر سبيشل </h2>
          <p>بعض الشركاء الذي نفتخر بالتعاون معهم بنجاحهم مع منصة متجر</p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 box gap-x-20 gap-y-10">
          <SpecailCard2
            head={"الفروع والمستودعات"}
            subHead={
              "تتناسب هذه الميزة مع توسع أعمالك في أكثر من مدينة ومنطقة جغرافية بحيث يتم تحديد المخزون الموجود في كل مستودع ويتم الخصم من مخزونه الخاص عند إتمام عملية البيع"
            }
            img={store}
          />
          <SpecailCard2
            head={"B2B البيع للشركات وبالجملة "}
            subHead={
              "يمكنك متجر سبيشل من البيع للعملاء الأفراد والشركات من خلال نموذج مخصص تتم الموافقة عليه من قبل مدير المتجر  كما تمكنك هذه الميزة من التحكم بأسعار المنتجات بشكل كامل   لتناسب عملاءك الأفراد أو الشركات"
            }
            img={moneyPhoto}
          />
          <SpecailCard2
            head={"رسوم مرنة لبوابة الدفع"}
            subHead={
              "صمم متجر سبيشل بشكل أساسي للشركات التي لديها زخم عالي من الطلبات لتتوافق مع هذا العدد الكبير من خلال تقديم رسوم مرنة لبوابة الدفع"
            }
            img={percentagePhoto}
          />
          <SpecailCard2
            head={"الربط التكاملى"}
            subHead={
              "متجر سبيشل ليست بداية جديدة، نحن نكمل معك الطريق ونساعدك على التوسع والانتشار، عن طريق إتاحة الربط مع مختلف البرامج والأدوات، بالإضافة إلى توفيرعدد لا محدود   من الموظفين والفروع ليتناسب مع نمو تجارتك"
            }
            img={infintePhoto}
          />
          <SpecailCard2
            head={"نقل البيانات من المنصات الأخرى إلينا"}
            subHead={
              "يمكنك الاستعانة بفريق مختص من خبراء متجر سبيشل لنقل بيانات متجرك مثل المنتجات والعملاء وغيرها من البيانات من مختلف منصات التجارة الإلكترونية إلى منصة متج لتسهيل عملية الانتقال و إتمامها بشكل سريع وسلس"
            }
            img={directionPhoto}
          />
          <SpecailCard2
            head={"تقارير تفصيلية شاملة"}
            subHead={
              "يمكنك متجر سبيشل من الاطلاع على جميع تفاصيل متجرك من خلال تقارير تفصيلية تمكنك من إدارة أعمالك بسهولة منها ما يلخص أداء المتجر، ومنها ما يفصل جميع العمليات ويوضح المنتجات أوالتصنيفات الأكثر مبيعاً"
            }
            img={report}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialSection2;
