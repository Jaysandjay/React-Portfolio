export default function InfoCard() {
  return (
    <div className="shadow-lg rounded-lg bg-white w-full max-w-sm m-5 p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">My Information</h2>

      <ul className="flex flex-col gap-3">
        <li className="break-words">
          <b>Email: </b> Jazzy6.s@hotmail.com
        </li>
        <li className="break-words">
          <b>Phone: </b> 519-984-8617
        </li>
        <li className="break-words">
          <b>Location: </b> Toronto, ON
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jasmine-sanders-b202044b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-wrap text-blue-800 hover:underline"
          >
            <img
              src="/images/logos/linkedin.png"
              alt="LinkedIn Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="truncate">LinkedIn Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
