import Title from "@/components/Title";
import Header from "./Header";
import Information from "./Information";
import Other from "./Other";

const Profile = () => {
  return (
    <div className="h-full">
      <Title />
      <Header />
      <div className="h-full">
        <Information />
        <Other />
      </div>
    </div>
  );
};

export default Profile;
