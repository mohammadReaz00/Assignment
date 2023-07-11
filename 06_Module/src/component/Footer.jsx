import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">
          Created By <span className="text-purple-500">Mohammad Reaz</span>
        </p>
        <p className="text-sm mt-2">
          <span className="text-gray-500">Follow me on:</span>{" "}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
