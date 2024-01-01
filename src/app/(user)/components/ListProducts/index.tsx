import React from "react";
import ProductCard from "../ProductCard";

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const products: Props[] = [
  {
    id: 2,
    title: "تيشيرت رجالي عصري بقصة ضيقة",
    price: 22.3,
    description:
      "نمط ضيق، أكمام طويلة بلون مغاير، فتحة رقبة هنلي بثلاثة أزرار، نسيج خفيف وناعم لراحة وتهوية في اللبس. تيشيرت مُخيط بشكل صلب مع ياقة دائرية مناسبة للاستخدام اليومي وعشاق البيسبول المتحمسين. تشمل الياقة الهنلي فتحة دائرية بها ثلاثة أزرار.",
    category: "ملابس رجالية",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "جاكيت رجالي من القطن",
    price: 55.99,
    description:
      "جواكيت خارجية رائعة لفصل الربيع/الخريف/الشتاء، مناسبة للعديد من المناسبات، مثل العمل، والتسلق، والتخييم، وتسلق الجبال/الصخور، وركوب الدراجات، والسفر أو أي أنشطة خارجية أخرى. خيار هدية جيد لك أو لأحد أفراد عائلتك. هدية دافئة للأب أو الزوج أو الابن في يوم الشكر أو عيد الميلاد.",
    category: "ملابس رجالية",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "تيشيرت رجالي عصري بقصة ضيقة",
    price: 15.99,
    description:
      "قد يكون اللون مختلفًا قليلاً بين الشاشة والتطبيق العملي. / يرجى ملاحظة أن بنية الجسم تختلف من شخص إلى آخر، لذا يجب مراجعة معلومات الحجم المفصلة أدناه في وصف المنتج.",
    category: "ملابس رجالية",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 6,
    title: "خاتم نسائي صغير بتصميم ميكروبيف",
    price: 168,
    description:
      "ضمان الرضا. استرجاع أو تبديل أي طلب في غضون 30 يومًا. مصمم ومباع من قبل Hafeez Center في الولايات المتحدة. ضمان الرضا. استرجاع أو تبديل أي طلب في غضون 30 يومًا.",
    category: "مجوهرات",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "خاتم وعد زواج نسائي بلاتيني",
    price: 9.99,
    description:
      "خاتم وعد كلاسيكي مطلي بالذهب الأبيض للخطوبة والزواج. هدايا لتدليل حبك أكثر للخطوبة، والزفاف، والذكرى السنوية، وعيد الحب...",
    category: "مجوهرات",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title:
      "أقراط نسائية مزدوجة من الفولاذ المقاوم للصدأ مطلي بالذهب الوردي من Pierced Owl",
    price: 10.99,
    description:
      "أقراط مسمار مزدوجة مطلية بالذهب الوردي. مصنوعة من الفولاذ المقاوم للصدأ 316L.",
    category: "مجوهرات",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
];

const ListProducts = () => {
  return (
    <div className="container mt-8">
      <h2 className="text-center mb-8">منتجاتنا</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
