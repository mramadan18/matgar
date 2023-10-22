import Image from "next/image";
import React from "react";
import store from "/public/img for salla/homePage/icons8-store-50.png";
import user from "/public/img for salla/homePage/icons8-users-48.png";
import Coffe from "/public/img for salla/homePage/icons8-coffee-mug-24.png";
import laptop from "/public/img for salla/homePage/icons8-laptop-50.png";
import book from "/public/img for salla/homePage/icons8-book-50.png";
import service from "/public/img for salla/homePage/icons8-services-50.png";

const Sectors = () => {
  return (
    <div
      id="sectors"
      className="anime-block home-block store-categories bg-grayer-100 dark:bg-darker-250 px-8"
    >
      <div className="content-container">
        <div className="title title--hero w-full center mb-8 sm:mb-12">
          <p
            className="anime-item opacity-0"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            مهما كان مجال تجارتك يمكنك الاعتماد على متجر ودعمها لمختلف القطاعات
          </p>
        </div>
        <div className="grid grid-cols-3box gap-8 max1023:gap-4">
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-store">
                <Image src={store} alt="store-photo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> متاجر التجزئة</h2>
              <p>مزايا عديدة تلائم تجارتك </p>
            </article>
          </a>
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-users">
                <Image src={user} alt="userPhoto" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> قطاع الجملة</h2>
              <p>نقلة نوعية في البيع للشركات والمؤسسات </p>
            </article>
          </a>
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-coffee-togo">
                <Image src={Coffe} alt="coffe-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> المطاعم والمقاهي</h2>
              <p>جميع ما تحتاجه لإدارة أعمالك رقميًا </p>
            </article>
          </a>
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-content">
                <Image src={book} alt="book-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> صناعة المحتوى</h2>
              <p>المكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح </p>
            </article>
          </a>
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-service-open">
                <Image src={service} alt="service-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> تقديم الخدمات</h2>
              <p>حلول مميزة لتقديم خدماتك وإدارة أعمالك </p>
            </article>
          </a>
          <a
            href="#"
            className="anime-item opacity-0 element card-entry card-entry--linked"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <span className="card-entry__icon">
              <i className="sicon-laptop">
                <Image src={laptop} alt="laptop-logo" />
              </i>
            </span>
            <article className="card-entry__meta">
              <h2> المنتجات الرقمية</h2>
              <p>المكان الأنسب لبيع كافة المنتجات الرقمية </p>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
