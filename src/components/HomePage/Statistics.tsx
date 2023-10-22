import React from "react";

const Statistics = () => {
  return (
    <div
      id="statistics"
      className="home-block anime-block statistics mt-[200px]"
    >
      <div className="content-container">
        <div className="flex items-center flex-col justify-center">
          <div className="title title--hero w-full center mb-8 sm:mb-12">
            <h2
              className="anime-item opacity-0"
              style={{ opacity: 1, transform: "translateY(0px)" }}
            >
              أكبر منصَّة لبنانية للتجارة الإلكترونيَّة في الشرق الأوسط
            </h2>
            <p
              className="anime-item opacity-0"
              style={{ opacity: 1, transform: "translateY(0px)", width: "50%" }}
            >
              {" "}
              أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية
              والعالمية الناجحة مع متجر اليوم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
