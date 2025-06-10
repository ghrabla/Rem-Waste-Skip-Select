import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Progress = () => {
  return (
    <div className="fixed max-w-14 md:w-full md:max-w-72 border-r border-gray-200 my-4">
      <div className="hidden md:flex items-end justify-between p-4 border-b border-gray-200">
        <div>
          <span className="text-4xl font-normal mr-1">35%</span>
          <span className="text-sm text-gray-500"> Progressing</span>
        </div>
        <div>Cancel</div>
      </div>

      <div className="max-w-md mx-auto ms-8 mt-10 relative">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-green-200 rounded-full -start-3 ring-4 ring-white">
              <svg
                className="w-3 h-3 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight text-gray-700 hidden sm:block">
              Postcode
            </h3>
          </li>
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-green-200 rounded-full -start-3 ring-4 ring-white">
              <svg
                className="w-3 h-3 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight text-gray-700 hidden sm:block">
              Waste Type
            </h3>
          </li>
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-black rounded-full -start-3 ring-4 ring-white"></span>
            <h3 className="font-bold leading-tight text-gray-700 hidden sm:block">
              Select Skip
            </h3>
          </li>
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full -start-3 ring-4 ring-white">
              <FontAwesomeIcon icon={faFileAlt} className="permit-icon" />
            </span>
            <h3 className="font-medium leading-tight text-gray-700 hidden sm:block">
              Permit Check
            </h3>
          </li>
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full -start-3 ring-4 ring-white">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            </span>
            <h3 className="font-medium leading-tight text-gray-700 hidden sm:block">
              Choose Date
            </h3>
          </li>
          <li className="mb-10 ms-6 min-h-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full -start-3 ring-4 ring-white">
              <FontAwesomeIcon icon={faCreditCard} className="icon" />
            </span>
            <h3 className="font-medium leading-tight text-gray-700 hidden sm:block">
              Payment
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Progress;
