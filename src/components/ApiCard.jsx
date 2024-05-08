import { useState, useEffect } from "react";

function ApiCard({ id, title, url, alt, description }) {
  return (
    <div>
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 ">
          {title}
        </h5>
        <img src={url} alt={alt} width="20%" />

        <p class="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </div>
  );
}

export default ApiCard;
