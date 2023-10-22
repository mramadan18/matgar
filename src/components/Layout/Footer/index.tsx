import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="content-container mx-auto px-10">
        <div className="footer-links grid gap-12 sm:gap-8">
          <nav
            className="widget-area"
            role="complementary"
            aria-label="نبذة عن متجر"
          >
            <section className="widget widget_nav_menu four wide column">
              <h2 className="widget-title">متجر</h2>
              <div className="menu-footer-quick-links-container">
                <ul id="menu-footer-quick-links" className="menu">
                  <li
                    id="menu-item-511"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-511"
                  >
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://features.salla.sa/ideas?sort=recent"
                    >
                      منصة المقترحات
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-590">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://apply.workable.com/salla/"
                    >
                      انضم لفريق متجر
                    </Link>
                  </li>
                  <li
                    id="menu-item-21853"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21853"
                  >
                    <Link href="https://salla.com/terms/">
                      اتفاقية الاستخدام
                    </Link>
                  </li>
                  <li
                    id="menu-item-21854"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21854"
                  >
                    <Link href="https://salla.com/privacy/">
                      سياسة الخصوصية
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <nav className="widget-area" role="complementary">
            <section className="widget widget_nav_menu four wide column">
              <h2 className="widget-title">متجر التطبيقات</h2>
              <div className="menu-footer-app-store-container">
                <ul className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-512">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://apps.salla.sa/ar/faq"
                    >
                      ما هو متجر التطبيقات
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-513">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://apps.salla.sa/ar/categories"
                    >
                      تصفح التطبيقات
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <nav className="widget-area" role="complementary">
            <section className="widget widget_nav_menu four wide column">
              <h2 className="widget-title">صانع التطبيقات</h2>
              <div className="menu-footer-app-maker-container">
                <ul className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-514">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://app-maker.salla.sa/"
                    >
                      ما هو صانع التطبيقات؟
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-515">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://s.salla.sa/mobile-app"
                    >
                      اصنع تطبيقاً لمتجرك
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <nav className="widget-area" role="complementary">
            <section className="widget widget_nav_menu four wide column">
              <h2 className="widget-title">الخدمات المساندة</h2>
              <div className="menu-footer-help-container">
                <ul className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-516">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://help.salla.sa/"
                    >
                      مركز المساعدة
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-593">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.youtube.com/c/SallaApp"
                    >
                      أكاديمية متجر
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-594">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://salla.link/Salla-Telegram"
                    >
                      مجتمع تجار متجر
                    </Link>
                  </li>
                  <li
                    id="menu-item-22271"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-22271"
                  >
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://complaint.salla.sa"
                    >
                      منصة الشكاوى
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        </div>
        <section className="widget flex items-center justify-between gap-4 max992:flex-col max992:items-start pt-4">
          <div className="flex items-center gap-2">
            <Link
              href="https://apps.apple.com/sa/app/سلة/id1148458340"
              target="_blank"
              aria-label="App Store"
              className="btn btn--store-link app"
            ></Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.emoney.sallacp&amp;hl=ar&amp;gl=US"
              target="_blank"
              aria-label="Play Store"
              className="btn btn--store-link play"
            ></Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="https://www.youtube.com/c/SallaApp?utm_source=salla.sa&amp;utm_referer=salla.sa"
              target="_blank"
              className="bg-transparent dark:text-gray-100 dark:hover:text-primary-l social-link"
            >
              <i className="sicon-youtube"></i>
            </Link>
            <Link
              href="https://twitter.com/SallaApp?utm_source=salla.sa&amp;utm_referer=salla.sa"
              target="_blank"
              className="bg-transparent dark:text-gray-100 dark:hover:text-primary-l social-link"
            >
              <i className="sicon-twitter"></i>
            </Link>
            <Link
              href="https://www.instagram.com/sallaapp/?utm_source=salla.sa&amp;utm_referer=salla.sa"
              target="_blank"
              className="bg-transparent dark:text-gray-100 dark:hover:text-primary-l social-link"
            >
              <i className="sicon-instagram"></i>
            </Link>
          </div>
        </section>
      </div>
      <div className="container mt-5 mx-auto px-10">
        <div className="footer-tail">
          <p>
            جميع الحقوق محفوظة لدى متجر
            <Link href="https://salla.com">متجر</Link>
            2023 ©
          </p>
          <div className="max992:w-full flex gap-3 max992:flex-col">
            <div className="footer-tail__item">
              <i className="sicon-phone text-primary"></i>
              <span>+972594061657</span>
            </div>
            <div className="footer-tail__item">
              <i className="sicon-location text-primary"></i>
            </div>
            <Link
              href="mailto:info@salla.sa"
              className="footer-tail__item"
              aria-label="Email"
            >
              <i className="sicon-mail"></i>
            </Link>
            <Link
              data-fslightbox="tax-certificate"
              data-caption="الرقم الضريبي"
              data-title="الرقم الضريبي"
              href="https://salla.com/wp-content/uploads/2023/02/VATCertificate.png"
              aria-label="الرقم الضريبي"
              className="footer-tail__item modal-toggle"
            ></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
