import Image from "next/image";
import demo_img from "#/admin_images/icons/demo_img.svg";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

const TableRowCustomers = ({ id, name, email, phone }: Props) => {
  return (
    <tr className="bg-white border-b">
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap border-r border-[#CDD3E3]"
      >
        <Image src={demo_img} alt="img" className="mx-auto" />
      </td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{name}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{email}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">{phone}</td>
      <td className="px-6 py-4 border-r border-[#CDD3E3]">
        <div className="flex justify-center items-center gap-2">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M1.85714 27.1875C1.85714 27.9334 2.15064 28.6488 2.67306 29.1762C3.19548 29.7037 3.90404 30 4.64286 30H21.3571C22.096 30 22.8045 29.7037 23.3269 29.1762C23.8494 28.6488 24.1429 27.9334 24.1429 27.1875V7.50001H1.85714V27.1875ZM17.6429 12.1875C17.6429 11.9389 17.7407 11.7004 17.9148 11.5246C18.089 11.3488 18.3252 11.25 18.5714 11.25C18.8177 11.25 19.0539 11.3488 19.228 11.5246C19.4022 11.7004 19.5 11.9389 19.5 12.1875V25.3125C19.5 25.5611 19.4022 25.7996 19.228 25.9754C19.0539 26.1512 18.8177 26.25 18.5714 26.25C18.3252 26.25 18.089 26.1512 17.9148 25.9754C17.7407 25.7996 17.6429 25.5611 17.6429 25.3125V12.1875ZM12.0714 12.1875C12.0714 11.9389 12.1693 11.7004 12.3434 11.5246C12.5175 11.3488 12.7537 11.25 13 11.25C13.2463 11.25 13.4825 11.3488 13.6566 11.5246C13.8307 11.7004 13.9286 11.9389 13.9286 12.1875V25.3125C13.9286 25.5611 13.8307 25.7996 13.6566 25.9754C13.4825 26.1512 13.2463 26.25 13 26.25C12.7537 26.25 12.5175 26.1512 12.3434 25.9754C12.1693 25.7996 12.0714 25.5611 12.0714 25.3125V12.1875ZM6.5 12.1875C6.5 11.9389 6.59783 11.7004 6.77197 11.5246C6.94611 11.3488 7.1823 11.25 7.42857 11.25C7.67484 11.25 7.91103 11.3488 8.08517 11.5246C8.25931 11.7004 8.35714 11.9389 8.35714 12.1875V25.3125C8.35714 25.5611 8.25931 25.7996 8.08517 25.9754C7.91103 26.1512 7.67484 26.25 7.42857 26.25C7.1823 26.25 6.94611 26.1512 6.77197 25.9754C6.59783 25.7996 6.5 25.5611 6.5 25.3125V12.1875ZM25.0714 1.87501H18.1071L17.5616 0.779307C17.446 0.545057 17.268 0.348012 17.0476 0.210337C16.8272 0.0726631 16.573 -0.00017742 16.3138 1.02731e-05H9.68036C9.42174 -0.000993469 9.16807 0.0715755 8.94841 0.209403C8.72876 0.34723 8.552 0.544741 8.43839 0.779307L7.89286 1.87501H0.928571C0.682299 1.87501 0.446113 1.97378 0.271972 2.1496C0.0978314 2.32541 0 2.56387 0 2.81251L0 4.68751C0 4.93615 0.0978314 5.17461 0.271972 5.35042C0.446113 5.52624 0.682299 5.62501 0.928571 5.62501H25.0714C25.3177 5.62501 25.5539 5.52624 25.728 5.35042C25.9022 5.17461 26 4.93615 26 4.68751V2.81251C26 2.56387 25.9022 2.32541 25.728 2.1496C25.5539 1.97378 25.3177 1.87501 25.0714 1.87501Z"
                fill="#FF0000"
              />
            </svg>
          </div>
          <Link href="/admin/customers/1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
            >
              <path
                d="M33.7723 11.1468C32.6848 9.2445 26.7031 -0.301166 16.5412 0.00731105C7.14392 0.247238 1.70608 8.57613 0.227666 11.1468C0.0785196 11.4073 0 11.7028 0 12.0037C0 12.3045 0.0785196 12.6 0.227666 12.8605C1.29824 14.7285 7.02497 24 17.034 24H17.4588C26.8561 23.7601 32.3109 15.4312 33.7723 12.8605C33.9215 12.6 34 12.3045 34 12.0037C34 11.7028 33.9215 11.4073 33.7723 11.1468ZM17.3739 20.5725C10.0498 20.7438 5.27466 14.4201 3.77925 12.0037C5.47858 9.2445 9.91382 3.60621 16.7111 3.43484C24.0012 3.24632 28.7933 9.58725 30.3057 12.0037C28.5554 14.7628 24.1712 20.4011 17.3739 20.5725Z"
                fill="#231F20"
              />
              <path
                d="M17 6C15.8133 6 14.6533 6.35189 13.6666 7.01118C12.6799 7.67047 11.9109 8.60754 11.4567 9.7039C11.0026 10.8003 10.8838 12.0067 11.1153 13.1705C11.3468 14.3344 11.9182 15.4035 12.7574 16.2426C13.5965 17.0818 14.6656 17.6532 15.8295 17.8847C16.9933 18.1162 18.1997 17.9974 19.2961 17.5433C20.3925 17.0891 21.3295 16.3201 21.9888 15.3334C22.6481 14.3467 23 13.1867 23 12C23 10.4087 22.3679 8.88258 21.2426 7.75736C20.1174 6.63214 18.5913 6 17 6ZM17 14.5714C16.4914 14.5714 15.9943 14.4206 15.5714 14.1381C15.1485 13.8555 14.8189 13.4539 14.6243 12.984C14.4297 12.5142 14.3788 11.9971 14.478 11.4983C14.5772 10.9995 14.8221 10.5413 15.1817 10.1817C15.5413 9.8221 15.9995 9.5772 16.4983 9.47798C16.9971 9.37876 17.5142 9.42968 17.984 9.62431C18.4539 9.81893 18.8555 10.1485 19.1381 10.5714C19.4206 10.9943 19.5714 11.4914 19.5714 12C19.5714 12.682 19.3005 13.336 18.8183 13.8183C18.336 14.3005 17.682 14.5714 17 14.5714Z"
                fill="#231F20"
              />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRowCustomers;
