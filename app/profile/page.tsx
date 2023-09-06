import ProfileSidebar from "@/components/profile/ProfileSidebar";
import getCurrentUser from "../actions/getCurrentUser";
import { Card } from "@/components/ui/card";
import ProfileDetails from "@/components/profile/ProfileDetails";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <h1>No PRofile page</h1>;
  }
  return (
    <div className="container p-10 md:grid grid-cols-7 gap-4 ">
      <div className=" col-span-2 border md:mb-0 mb-4 ">
        <ProfileSidebar currentUser={currentUser} />
      </div>
      <Card className=" border  col-span-5">
        <ProfileDetails currentUser={currentUser} />
      </Card>
    </div>
  );
};
export default ProfilePage;
