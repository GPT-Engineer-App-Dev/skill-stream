import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
      toast.success(`Enrolled in ${course}`);
    } else {
      toast.error(`Already enrolled in ${course}`);
    }
  };

  const courses = [
    { title: "Course 1", description: "Brief description of Course 1" },
    { title: "Course 2", description: "Brief description of Course 2" },
    // Add more courses as needed
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.title} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-muted-foreground">{course.description}</p>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => handleEnroll(course.title)}
            >
              Enroll
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;