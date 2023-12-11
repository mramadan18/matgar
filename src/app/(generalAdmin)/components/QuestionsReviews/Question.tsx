import Image from "next/image";
import home_icon from "#/admin_images/icons/nav_home.svg";
import stars from "#/admin_images/icons/stars.svg";

type Props = {
  rating?: boolean;
  title?: string;
};

const Question = ({ rating, title }: Props) => {
  return (
    <div className="p-6 bg-admin_bg relative">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14">
          <Image src={home_icon} alt="User" className="w-full h-full" />
        </div>
        <div>
          <h4 className="mb-2">أسم المستخدم</h4>
          {rating && <Image src={stars} alt="stars" />}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {title && <h4>{title}</h4>}
        <p className="w-full md:w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur. In tortor dolor turpis in
          scelerisque. Integer sagittis consequat senectus sem etiam ac
          convallis eleifend magna. Consequat venenatis dignissim faucibus ut
          pulvinar rhoncus sed. Volutpat fermentum potenti aliquet amet in in
          mauris odio.
        </p>
      </div>

      {!rating && (
        <button className="flex items-center gap-2 bg-primary-900 py-4 px-6 text-white rounded-lg mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M24.5729 0.579834H4.00762C2.11712 0.579834 0.580078 2.11687 0.580078 4.00738V19.4313C0.580078 21.3218 2.11712 22.8589 4.00762 22.8589H9.14894V27.3575C9.14894 27.8824 9.74876 28.1876 10.1718 27.877L16.8609 22.8589H24.5729C26.4634 22.8589 28.0004 21.3218 28.0004 19.4313V4.00738C28.0004 2.11687 26.4634 0.579834 24.5729 0.579834Z"
              fill="white"
            />
          </svg>
          <span>نشر السؤال مع الأجابه</span>
        </button>
      )}
    </div>
  );
};

export default Question;
