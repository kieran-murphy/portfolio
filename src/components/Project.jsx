import React from "react";

const Project = () => {
  return (
    <article className="lg:w-1/2 mt-10 mx-10 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm dark:shadow-gray-700/25">
      <div class="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
        {/* <img
          src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png"
          alt=""
          className="w-full"
        /> */}
        <time
          datetime="2022-10-10"
          class="block text-xs text-gray-500 dark:text-gray-400"
        >
          10th Oct 2022
        </time>

        <a href="#">
          <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>

        <div class="mt-4 flex flex-wrap gap-1">
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            Snippet
          </span>

          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
};

export default Project;
