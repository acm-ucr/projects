import React from "react";
import TechTag from "@/components/developer/TechTag";
import CourseTag from "@/components/developer/CourseTag";

const techStack = [
  "Python",
  "JavaScript",
  "C#",
  "react.js",
  "tailwind css",
  "C++",
  "Git",
  "firebase",
  "Custom",
];
const courses = [
  "CS100",
  "CS111",
  "CS141",
  "EE120B",
  "EE030A",
  "MATH010A",
  "MATH31",
  "BIO002",
];
const bgColors = [
  "bg-blue-600",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-purple-600",
  "bg-fuchsia-600",
  "bg-rose-600",
  "bg-orange-600",
];
const boColors = [
  "border-blue-600",
  "border-indigo-600",
  "border-violet-600",
  "border-purple-600",
  "border-fuchsia-600",
  "border-rose-600",
  "border-orange-600",
];
const tColors = [
  "text-blue-600",
  "text-indigo-600",
  "text-violet-600",
  "text-purple-600",
  "text-fuchsia-600",
  "text-rose-600",
  "text-orange-600",
];

const ProfileOther = () => {
  return (
    <div className="bg-black text-white px-8 ">
      <h2 className="text-xl font-bold  text-sky-400">Others</h2>
      <h3 className="text-md font-semibold mb-2">Some thing else</h3>
      <hr />

      <div className="grid grid-cols-10 gap-4 ">
        <div className="col-span-3 py-4">
          <h2 className="text-lg font-bold">description</h2>
        </div>

        <div className="col-span-7 p-4">
          <h2 className="text-lg font-bold"></h2>
          <div className="flex flex-wrap">
            <p className="text-justify">
              Reddit is a community of communities where people can dive into
              anything through experiences built around their interests,
              hobbies, and passions. Our mission is to bring community,
              belonging, and empowerment to everyone in the world. Reddit users
              submit, vote, and comment on content, stories, and discussions
              about the topics they care about the most. From pets to parenting,
              with over 100,000 active communities and over 70 million daily
              active users, it is home to the most open and authentic
              conversations on the internet. For more information, visit
              redditinc.com.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3 py-4">
          <h2 className="text-lg font-bold">tech stack</h2>
        </div>

        <div className="col-span-7 p-4">
          <h2 className="text-lg font-bold"></h2>
          <div className="flex flex-wrap">
            <p className="flex flex-row  gap-2">
              {" "}
              {techStack.map((tech, i) => (
                <TechTag
                  skill={tech}
                  key={i}
                  bgColor={
                    bgColors[Math.floor(Math.random() * bgColors.length)]
                  }
                />
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3 py-4">
          <h2 className="text-lg font-bold">course</h2>
        </div>

        <div className="col-span-7 p-4">
          <h2 className="text-lg font-bold"></h2>
          <div className="flex flex-wrap">
            <p className="flex flex-row gap-2">
              {" "}
              {courses.map((course, i) => (
                <CourseTag
                  key={i}
                  course={course}
                  boColor={boColors[i % boColors.length]}
                  tColor={tColors[i % tColors.length]}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOther;
