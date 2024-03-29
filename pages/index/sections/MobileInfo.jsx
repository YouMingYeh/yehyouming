import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai/index.js";
import { SiMedium } from "react-icons/si/index.js";

export default function MobileInfo() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `yehyouming's_resume.pdf`;
    link.href = "https://github.com/YouMingYeh/CV/raw/main/CV.pdf";
    link.click();
  };

  return (
    <div className="pt-20 pb-32 px-3 h-full max-w-xl mx-auto">
      <span className="flex justify-center w-full font-bold text-4xl font-serif">
        My Info
      </span>
      <div className="px-3 border shadow-lg rounded h-full overflow-scroll scrollbar-hide">
        <div className="mt-3 w-full flex justify-center">
          <button
            className="btn self-center btn-xl btn-outline w-fit rotate-2 hover:rotate-6 hover:scale-125 h-fit"
            onClick={downloadResume}
          >
            <span className="font-extrabold text-xl font-serif">
              Download my Resume
            </span>
          </button>
        </div>
        <h1 className="text-2xl font-bold underline font-serif">Bio</h1>
        <p className="py-1">
          <h1 className="font-bold">2002 </h1>
          <h1>Born in Taoyuan, Taiwan 🇹‍🇼</h1>
        </p>
        <p className="">
          <h1 className="font-bold">2022 </h1>
          <h1>NTUIM Orientation Camp General Coordinator</h1>
        </p>
        <p className="py-1">
          <h1 className="font-bold">2023 </h1>
          <h1>PDAO 2023 System Manager and Problem Creater</h1>
        </p>
        <p className="py-1">
            <span className="font-bold">2023 </span>
            <span>Chunghwa Telecom Laboratories Full Stack Developer Summer Part Time  </span>
          </p>
          <p className="py-1">
            <span className="font-bold">2023 </span>
            <span>PDOGS Judge System (Devops) member</span>
          </p>
          <p className="py-1">
            <span className="font-bold">2024 - present</span>
            <span>NTU ArtFest Riddle City Dev</span>
          </p>
        <p className="py-1">
          <h1 className="font-bold">2021 - present </h1>
          <h1>Major in Information Management,</h1>
          <h1>National Taiwan University（國立臺灣大學 資訊管理學系）</h1>
        </p>

        <h1 className="text-2xl font-bold underline py-3 font-serif">My ❣</h1>

        <h1 className="text-2xl font-bold underline py-3 font-serif">On web</h1>
        <p className="py-1 flex">
          <AiFillGithub />
          <a
            href="https://github.com/YouMingYeh"
            className="link after:content-['_↗']"
          >
            GitHub
          </a>
        </p>
        <p className="py-1 flex">
          <AiFillFacebook />
          <a
            href="https://www.facebook.com/profile.php?id=100010253504873"
            className="link after:content-['_↗']"
          >
            Facebook
          </a>
        </p>
        <p className="py-1 flex">
          <AiFillInstagram />
          <a
            href="https://www.instagram.com/yymin_16/"
            className="link after:content-['_↗']"
          >
            Instagram
          </a>
        </p>

        <p className="py-1 flex">
          <SiMedium />
          <a
            href="https://medium.com/@ym911216"
            className="link after:content-['_↗']"
          >
            Blog
          </a>
        </p>

        <h1 className="text-2xl font-bold underline py-3 font-serif">
          Contact?
        </h1>
        <p className="py-1 ">email: b10705052@ntu.edu.tw (frequently used)</p>
        <p className="py-1">gmail: ym911216@gmail.com</p>
        <p className="py-1">phone: +886 0976343024</p>
      </div>
    </div>
  );
}
