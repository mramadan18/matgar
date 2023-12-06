import Link from "next/link";
import React from "react";

const BreadcrumbItemMain = () => {
  return (
    <li>
      <Link
        className="flex items-center text-[#0279DE] font-medium"
        href="/dashboard/main"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={22}
          height={22}
          viewBox="0 0 31 31"
        >
          <defs>
            <pattern
              id="pattern"
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              viewBox="0 0 96 96"
            >
              <image
                width={96}
                height={96}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADx0lEQVR4nO2bP2gUURDGZ2dRgoIgQQJpxEIbCQhpTKNgpZ0QtNDOwsLGQuK+lwhnmdZSsLDQzkpBKytBEFKJCMabt0YSTSGIEMTgn5U95BKjye3bfXc3Ozs/eF2y+33zcbvvu90DUBRFURRFURRFqROmPdlZyuCJk/YpNO4LWlqLZ9MzmsEAQUMX0bh1tC7rLOO+Y0KXNIRBDN+6q2joZ3f43UW/Iks3NYS+kUWRpfl/B//3iizdglaGGkRIWq92R8bd7zX8jRDcA2ilIxpCCK593BtZelJ0+JtCeAqtxX0aQhUsjaF1C77D37RewszSuIZQhrl3h9C4xQrD/7NDIgeGjhQ9ba/jNSNM055E41YrD39jh/QJTDpV5NSNDyDuFqxQw++GUKiwNToA3Fqwet1ojbuTr+KXI7een2NHDU0NALctWNvtcmg+7wad/zUu8fgk7FjYGhhAVqhgbRrgDzR0ZetR8q8iOl9JFA/wv4WtWQG0/AoWWvcNrTu/3eFim55FS1+rFLbmBOBbsAx9hsSd6Hnc2fR4vuspW9iaEYBvwTL0AWbTY4WPf/3tUTTufZnCJj8A74JFr2HOHfQ+z8zSeD5Y38ImOwDvgkXPwSyPlj/f8mh+jOIh9NYGTSlYkXEPobWyp/KJW+lIfrP1uBzJC8C7YFm6C5cXdgUTcC6LI0u3GxlAlYIVGr/CVvsAwhSs0PgWtnoGELhghca3sNUrgDIFy7qTA9dp0imfwlaPALyfYNEKJDQxNL0JTeQavAKwNAZsC5Z1b/pesEJTprDdaB+GWhcs416AXTwAXDBL+9G6Zx76V9m8EuldsKx7FKRghca7sNFabNLT0OiCFRrfwtbxTheg6QUrNL5P2PK/h6YXrNCEesI27IKVxQlNQ02JE5r28RpZdy+fUf8KlqHHPoLyBTUHWbwSWeEVQag5WMJzPqtwhc27YGkAWOKVyL69Igg1Byt4r1TYQr0iCDUHK/ov9Rs234KlAbhwhc23YGkAbriFrekBwLBhL1C6P/YCpftjL1C6v6oCMdDNvl+bBA3AagD6CbB6Ccr0EqT3gExvwlZvwroLsroNzXQbOsAeAML1gXSDyFwfSDeIzPWBdIPIXB9IN4jM9YF0g8hcH0g3iMz1gXSDyFwfSDeIzPWBdIPIXB9IN4jM9YF0g8hcH0g3iMz1gXSDyFwfSDeIzPWBdIPIXF9legmsukC4PpBuEJnrA+kGkbk+kG4QmesD6QaRuT6QbhCZ6wPpBpG5PpBuEJnrUxRFURRFURRFURRFUaAx/AZGIO700Az/iAAAAABJRU5ErkJggg=="
              />
            </pattern>
          </defs>
          <rect
            id="icons8-home-page-96"
            width={31}
            height={31}
            fill="url(#pattern)"
          />
        </svg>
        <span className="mx-2 text-lg">الرئيسية</span>
        <svg
          className="flex-shrink-0 h-6 w-6"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
        </svg>
      </Link>
    </li>
  );
};

export default BreadcrumbItemMain;
