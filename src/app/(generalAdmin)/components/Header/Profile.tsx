const Profile = () => {
  return (
    <div className="relative flex justify-center items-center gap-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
      >
        <path
          d="M1.02415 0H14.1967C15.108 0 15.5636 1.19139 14.9186 1.8896L8.33485 9.02133C7.93552 9.45356 7.28534 9.45356 6.88602 9.02133L0.302299 1.8896C-0.342763 1.19139 0.112876 0 1.02415 0Z"
          fill="#06112E"
        />
      </svg>

      <span className="font-extrabold">Admin</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="33"
        viewBox="0 0 30 33"
        fill="none"
      >
        <path
          d="M15 16.5C19.7344 16.5 23.5714 12.8068 23.5714 8.25C23.5714 3.69316 19.7344 0 15 0C10.2656 0 6.42857 3.69316 6.42857 8.25C6.42857 12.8068 10.2656 16.5 15 16.5ZM21 18.5625H19.8817C18.3951 19.2199 16.7411 19.5938 15 19.5938C13.2589 19.5938 11.6116 19.2199 10.1183 18.5625H9C4.03125 18.5625 0 22.4426 0 27.225V29.9062C0 31.6143 1.43973 33 3.21429 33H26.7857C28.5603 33 30 31.6143 30 29.9062V27.225C30 22.4426 25.9688 18.5625 21 18.5625Z"
          fill="#06112E"
        />
      </svg>
    </div>
  );
};

export default Profile;
