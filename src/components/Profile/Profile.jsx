
import React from "react";
import Header from "../Header";
import { AiOutlineBook } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { LiaNotesMedicalSolid } from "react-icons/lia";


function Profile() {
  const data = [
    { rank: 1, name: "kriti Das", course: 6, hours: 240, badge: "gold" },
    { rank: 2, name: "Aditya Pawar", course: 5, hours: 210, badge: "silver" },
    { rank: 3, name: "Raj Gupta", course: 4, hours: 190, badge: "bronze" },
    { rank: 9, name: "You", course: 2, hours: 92, badge: null },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Profile Header */}
      <div className="bg-[#FFCD5D] h-12 flex justify-center items-center text-xl font-semibold">
        Profile
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Profile Info */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 p-6">
            <div className="bg-[#FFCD5D] rounded-lg p-6 flex flex-col md:flex-row items-center">
              <img
                className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white object-cover"
                src="https://s3-alpha-sig.figma.com/img/027c/5c82/5bf85922c6965220c96ac141f0374b7b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~jMNLPhTwEg23x12kPm3saAQ4znk3a1eLxlm62ToKbti~VXPDzKAK9H1IaOFljnhYufRQkSqVYxePrce5C6yVG~NjVOofq95utIOVECxELEMyyZVSrpjfkjXR8wil7cdNlrR6L7nZtjOW~cKpfd8XE6wA7tQrU0dY2wgRH8GfCP6LeFEUUwfFkxGdmiNA6PJemjKC77rRNC-deHkltKHRPMTDqecYH0ntWC4xiZzpxjRB8k6k5jYgYGTMJc9DsD3iTrYVuslU1qFcIMWLCWx2H7D-KvcmPxGCQBM22uunkqjm-E3yQTbjP0H2EwMDadBpsoDG-gD2Z2ne7IM8CJVw__"
                alt="Profile"
              />
             
              <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
                <h1 className="text-lg font-semibold">Amrit Shiksha Vidyalaya</h1>
                <p className="text-sm text-gray-700">
                  ID-ASV215487963 <br />
                  Email - amritshiksha@gmail.com
                </p>
                
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Overview Cards */}
              {[
                { title: "Courses", icon: <AiOutlineBook />, completed: 3, ongoing: 2 },
                { title: "Certificates", icon: <PiCertificate />, completed: 3, ongoing: 2 },
                { title: "Projects", icon: <LiaNotesMedicalSolid />, completed: 3, ongoing: 2 },
              ].map((item, index) => (
                <div key={index} className="bg-[#EBF2FF] rounded-lg p-4">
                  <div className="bg-[#C6DAFF] rounded-lg flex items-center p-2">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-center">
                      <h1 className="text-xl">{item.completed}</h1>
                      <p className="text-xs">Completed</p>
                    </div>
                    <div className="border-l border-gray-500"></div>
                    <div className="text-center">
                      <h1 className="text-xl">{item.ongoing}</h1>
                      <p className="text-xs">Ongoing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Leaderboard</h1>
            <table className="w-full border-none">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Rank</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Course</th>
                  <th className="p-2">Hours</th>
                  <th className="p-2">Badge</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.rank} className="text-center">
                    <td className="p-2">{item.rank}</td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.course}</td>
                    <td className="p-2">{item.hours}</td>
                    <td className="p-2">
                      {item.badge && (
                        <div
                          className={`rounded-full w-6 h-6 ${
                            item.badge === "gold"
                              ? "bg-yellow-500"
                              : item.badge === "silver"
                              ? "bg-gray-400"
                              : "bg-orange-700"
                          }`}
                        ></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ongoing Courses */}
          <div className="shadow-lg rounded-lg bg-white col-span-4 md:col-span-2 p-6">
            <h2 className="text-lg font-semibold mb-4">Ongoing Courses</h2>
            <div className="space-y-4">
              {/* Courses */}
              {[1, 2].map((_, index) => (
                <div key={index} className="flex items-center">
                  <img className="w-24 h-24 rounded-md object-cover" src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AC1ctdoUt0PvEHPftVjWog-POIfOyul87lqjwqMPvVl-mnGclJ5ddnfV0h3vCNzIaYxHV778xfSDAHq-tMsLyRZD30MOXpVYCRVz3vgOQMD54L39s9We3-hSpBOvFrB2U9L89pdq-cqrK8gWPPTT7UzzucoeEwfPrvD2XCTClP3Ed3GGPoQ0SqUA2LGJYlBX6W7sgxk3MryqEExWM3SFtlgQDd85EtowwP-IEcTQAH1ljZYwtL6iUHSrUQZyusSghRaWhjuTWITPGNuepNx9Hy-yQzg-O9p9kLUZ7px06-ixrYxmxonXLEkbineWZtBuZL6khluY0VF022ZjiFlkgw__" alt="Course" />
                  <div className="ml-4">
                    <h3 className="font-medium">Developing Kids Website</h3>
                    <p className="text-sm text-gray-500">By: Instructor</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
