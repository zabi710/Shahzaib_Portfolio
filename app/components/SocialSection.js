import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function SocialSection() {
  return (
    <section className="py-16 text-center">
      <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">
        Find me on
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-[#0A66C2] hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaLinkedin />
          <span className="text-sm mt-2">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          className="text-black dark:text-white hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaGithub />
          <span className="text-sm mt-2">GitHub</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-[#E4405F] hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaInstagram />
          <span className="text-sm mt-2">Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-[#1877F2] hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaFacebook />
          <span className="text-sm mt-2">Facebook</span>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          className="text-[#FF0000] hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaYoutube />
          <span className="text-sm mt-2">YouTube</span>
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          className="text-black dark:text-white hover:scale-110 transition flex flex-col items-center text-3xl"
        >
          <FaTiktok />
          <span className="text-sm mt-2">TikTok</span>
        </a>
      </div>
    </section>
  );
}
