import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
  const {user}=useAuth();
  return (
    <div className="flex justify-center font-semibold text-gray-400 items-center text-xl md:text-3xl my-10 md:mb-48">{user.displayName}&apos;s Dashboard</div>
  );
};

export default DashboardHome;
