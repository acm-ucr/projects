import Protected from "@/components/Protected";
import Profile from "@/components/developer/profile/Profile";

const Page = () => {
  return (
    <Protected>
      <Profile />
    </Protected>
  );
};

export default Page;
