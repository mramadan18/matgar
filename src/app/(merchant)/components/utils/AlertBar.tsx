import Link from "next/link";
import React from "react";

interface PropsValue {
  title: string;
}

const AlertBar = ({ title }: PropsValue) => {
  return (
    <div className="p-4 mt-8 bg-[#E9E9E9] rounded-md flex justify-start items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={30}
        height={30}
        viewBox="0 0 35 35"
      >
        <image
          id="icons8-error-50"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVR4nO2ZW4hNURjHf2aMy7gO0QhDrrmlUWRCIsWDywMPg6JGlHjgZV6QiaYQuT3wYF4oE0UUUZLGRNFEI5OUZDAuTe7369aq/9RubOfs2zl7b51ffbVa6/vW+n/nsvZa34YcORLLMqCchDMJ+CWbQkLpANQDluy6+hLHciXwQmapL1EUAs0SXwGsUvsp0I0EsV3CbwF5spvq20ZCGAx8kugZtv4y4DfwGRhKAjipJI47jNVq7AQxZ5rtUx/iMD4I+KhkZhJT8oAGidyawq9KPreBfGLIGgl8kmZn6go8ku9qYkZP4LnEuTmOLJXvS6A3MWKPj6f3VcXsJiaMAL7qPDXZQ1ypYr4Do4kB5/XJHvERW6PYc0TMPAl5BxQ7jHcCimSm3Z5ixVqaKxIKgHsSUfkPny22069pO1GpcTOXmTPrbJSAB0DnNM8MS20nzDd1Xz4byDJ9gFdafGEKPzeJGBbJ5w3QjyxyWAtfTuPnNhHDRfkdIkuMA34AP4EJISYyVluxmXciWeCKhB1w4eslEcNB+dZn+lq8RAu9BvpmIJEioFX+i8kQXYCHWmSdyxiviRjWy79ZV+bQ2awFmjzs934SyQfuKGYTITMQ+KDJ53qI85OIYbZizJW5hBA5ponPeIzzm4jhrOKOEhJTdX39BozKYiLDdao2a08nIGYLvCEhO3zEB0nEsFOxDbpK+2alrVrYK4JEegDPFL8Cn3QHWmzVwiA7naW2HyoU3yJNnqkO4WstsN1HCkKozlR7DR4GfNEfzV4tjIoy24Yz0kvg6RTVwqiolaZTbgNmhfgwatt1jO0KOFeJraZsNKY9HjS6qBa6Za8tEdMOSpXmugt0TOW4Vo6PQzqwhZ1IobRZ0pr2CB3Wy0vz+mCOzKmo7YdyaWyV5r/YL4drCXjXVyet+9oPjNE102u1MCpKpdVcucfbBy4EqBZGRY00X2rrWKCO98AAkkN/4K20z0c3Pivh1mQv7yfZ6qL+eeT4b/kDXLNVbksXjZ8AAAAASUVORK5CYII="
        />
      </svg>
      <p className="text-xl">
        {title}{" "}
        <Link href={"#"} className="text-[#0279DE] underline">
          إضغط هنا
        </Link>
      </p>
    </div>
  );
};

export default AlertBar;
