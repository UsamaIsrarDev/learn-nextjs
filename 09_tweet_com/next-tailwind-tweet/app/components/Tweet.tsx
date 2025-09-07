import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { RxUpload } from "react-icons/rx";

const Tweet = () => {
  return (
    // This is the main container you can see with the border

    // It contain 2 child elements, the profile image and another div that will contain everything else

    // This is a flexbox so the image and content are kept inline

    <div className="max-w-xl bg-gray-50 my-24 mx-auto p-3 flex">
      {/* This is the profile image */}

      <div>
        <Image
          src={"/assets/profile.png"}
          alt=""
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>

      {/* This is the div that contain remaining content
      1. 1 flexbox that will contain the first line of the tweet that shows the name, handle, date, and option menu
      2. 1 div that contains the tweet text
      3. 1 flexbox that contain all the action buttons */}

      <div className="w-full px-2">
        {/* This is the flexbox with the name, handle, date and kebab menu */}

        <div className="flex">
          {/* This is the flexbox with the name, handle, and date */}

          <div>
            <Link href={""}>
              <strong className="font-bold text-gray-800 mr-1">
                Usama Israr Khan
              </strong>
            </Link>
            <span className="text-gray-500 mr-1">@heyusama</span>
            <span className="text-gray-500 mr-1">&middot;</span>
            <span className="text-gray-500 mr-1">Sep 09</span>
          </div>

          {/* This is the kebab menu */}

          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>

        {/* This is the div that contains the tweet text */}

        <div>
          <p>
            You are amazing if you take time to comment on a tweet or youtube
            vedio or a blogpost that has helped you! 👏🏾
          </p>
        </div>

        {/* This is the flexbox that contains all the action buttons it will contain : 
        1. div for replies
        2. div for retweets
        3. div for likes
        4. div for share
        5. div for stats */}

        <div className="mt-2 flex justify-between">
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegComment />
            <span>20</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FaRetweet />
            <span>17</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FaRegHeart />
            <span>215</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <RxUpload />
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FiBarChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Tweet);
