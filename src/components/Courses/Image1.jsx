
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";

function Image1() {
  return (
    <div className="bg-white w-full">
      <div className="grid grid-cols-2 gap-4 p-4 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-sm rounded-md p-3">
          <img
            className="rounded-lg w-full h-40 object-cover"
            src="https://s3-alpha-sig.figma.com/img/26ab/8245/0778d8d405a7ed23ba9c0c6896262808?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dwk2nGxXBnatB12kvFPbN9lGYsIDOH49qxka3gAypciFUsOOXhXcsb3TAn2syCv9Ze86b7Ev1LILk7jnW6xnw7MLifiQBHL9d0ZyPbZ2GcW1c6zJc6IZTtHYsZCWLr3yK3mbrgChI9jpIcCEgRYuqmR8ducnVcxloGo7tSYu5SzloZB1sExo~bzZeaAsJHawiaRaqHZzH0vOWfZntIkQ9QUMXCPYJ7pVC95K3GdV7wgl8fl0~d91cufMK3X2aRpQPm3lAAjQIbGM5IFhEgqcps7~Ie~BAB9pq7p8hBr00YXu~vVOf4GjdU54U9o6WYlRvY3bmWkWerF9sHrl2mktQA__"
            alt="course"
          />
          <div className="mt-2">
            <h1 className="text-base font-semibold">Developing Kids Website</h1>
            <p className="text-sm text-gray-600 mt-1">
              <span className="opacity-60">Course by:</span> Ravikanth Ratore
            </p>
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <div><HiOutlineClock className="inline text-blue-600 mr-1" />7 hrs</div>
              <div><CiCalendar className="inline text-blue-600 mr-1" />Modules</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-sm rounded-md p-3">
          <img
            className="rounded-lg w-full h-40 object-cover"
            src="https://s3-alpha-sig.figma.com/img/6e49/c50d/3d7d595e7200861bb9e48026c6716f3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MBHCt3saznCBH-HMT8KDeFDbc-zvTOMwLiKy9p7M6ZBBxAhBy58~unVOkBaKghXSdsTy8xaArKirDhjW1FhmVzMCMDowiPDDXv00csTFdwhYyj~Lxro9IyIK3wrTKJGBRmMeHX7vzAfIXDGnvBMpDbd-mZBXvYCZpwkv5JV7yypsjwA5xCkeYbv2FRuFD013QuuPnbH0-5n4kgS6DdtybfGxnUy4vrNmhWPTwJhBM09FPYy1eiGJ7uTvxhcNA9~GgJp0sA2sdUVoGf8juJ9b6nPQN1Sk6Q3Y3xYUY0VHv5vt7~fwCqyEdj~Uw03IGEDVPIcQx-xboxLQ0MuUB6dzfA__"
            alt="course"
          />
          <div className="mt-2">
            <h1 className="text-base font-semibold">Developing Kids Website</h1>
            <p className="text-sm text-gray-600 mt-1">
              <span className="opacity-60">Course by:</span> Ravikanth Ratore
            </p>
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <div><HiOutlineClock className="inline text-blue-600 mr-1" />7 hrs</div>
              <div><CiCalendar className="inline text-blue-600 mr-1" />Modules</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-sm rounded-md p-3">
          <img
            className="rounded-lg w-full h-40 object-cover"
            src="https://s3-alpha-sig.figma.com/img/c269/fb99/73dd2f60946ff2cdba3d15894cfed467?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XODALYqRyuUNcc~XLUSBeGs1rDmYLF7Hb2K~Uk3f6TFiO-5Cu9km0g0SLJ8AXbkwW~hKFVBMSn3pQo8S1uXHclyG7bJ6rvsnTI3n8SQonI7WqL3OQ2vZvNi0Sq69vVyTILkri9Vvd~BRXBf9tWbY3NLaZmaZ6e0~sRlmcg32bIOVbKxoKSxpwaUWdSg19m-TSl7QzesiJxpyhipdnQ1yHVXo3IL4EUWPofRneCwnDC1fdCDYCDsTaGoWSOrSP54yHBQHaMT2Ts-m31BruyT5C74rLjvowFFNdyccTTmmI3xiOPUVWgf8sUP2inQkCo-Wf0dAp6ppL83vWnmI~sTDuw__"
            alt="course"
          />
          <div className="mt-2">
            <h1 className="text-base font-semibold">Developing Kids Website</h1>
            <p className="text-sm text-gray-600 mt-1">
              <span className="opacity-60">Course by:</span> Ravikanth Ratore
            </p>
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <div><HiOutlineClock className="inline text-blue-600 mr-1" />7 hrs</div>
              <div><CiCalendar className="inline text-blue-600 mr-1" />Modules</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Image1;
