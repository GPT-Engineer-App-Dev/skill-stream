import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Name</h2>
          <p className="text-muted-foreground">User Name</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-muted-foreground">user@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Enrolled Courses</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Course 1</li>
            <li>Course 2</li>
            {/* Add more enrolled courses as needed */}
          </ul>
        </div>
        <Button variant="primary">Edit Profile</Button>
      </div>
    </div>
  );
};

export default Profile;