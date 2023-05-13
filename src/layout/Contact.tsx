import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <section className="font-body p-8 flex flex-col bg-[#024d78] text-white">
      <h2 className="font-title text-2xl">Contact Me</h2>
      <p>Please get in touch if you'd like to know more or work together.</p>
      <div className="flex mt-4 items-center">
        <FontAwesomeIcon icon={faPhone} className="text-4xl" />
        <p className="ml-4">123-456-789</p>
      </div>
      <div className="flex mt-4 items-center">
        <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
        <a href="mailto:k.ms@tuta.io">
          <p className="ml-4">k.ms@tuta.io</p>
        </a>
      </div>
    </section>
  );
}
