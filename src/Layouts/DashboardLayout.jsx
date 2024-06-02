import Menu from "../components/Dashboard/Menu";

const DashboardLayout = () => {
    return (
        <div>
      <div className="bg-base-300 p-4">
        <h1 className="text-center text-gray-600 text-3xl italic">
          Welcome to the Dashboard
        </h1>
      </div>
     <Menu></Menu>
    </div>
    );
};

export default DashboardLayout;