import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="space-y-4">
        {/* Example course */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Course Title</h2>
          <p className="text-muted-foreground">Brief description of the course.</p>
          <Button variant="primary" className="mt-2">Enroll</Button>
        </div>
        {/* Add more courses as needed */}
      </div>
    </div>
  );
};

export default Courses;