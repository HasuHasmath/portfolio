import Image from "next/image";
import { Inter } from "next/font/google";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import code from "../../public/code.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-3xl font-burtons">Hasmath</h1>
            <ul className="flex justify-between gap-10">
              <li className="hover:text-red-500 cursor-pointer">Night Mode</li>
              <li className="text-xl text-blue-700 hover:text-green-600 cursor-pointer">
                Resume
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-5 text-teal-500">Mohamed Hasmath</h2>
            <h3 className="text-2xl py-5">Software Engineer</h3>
            <p className="text-md py5 text-gray-500 font-medium leading-7">
              As a seasoned software engineer, I am dedicated to crafting
              innovative solutions that meet the complex challenges of modern
              software development. With a solid foundation in computer science
              principles and extensive hands-on experience, I specialize in
              building scalable, reliable, and maintainable software systems. My
              passion for technology and commitment to excellence drive me to
              continually seek out new approaches and technologies to deliver
              impactful solutions.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-10 text-blue-400">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-2">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-700">
              As a software engineer, I offer comprehensive services
              encompassing custom software development, full-stack development,
              web development, mobile app development, API development, database
              management, DevOps and{" "}
              <span className="text-blue-500 cursor-pointer hover:text-green-500">
                cloud services
              </span>
              , software testing and quality assurance, maintenance and support,
              consulting and technical advisory, training and workshops, and
              project management. With expertise in modern technologies and
              methodologies, I provide tailored solutions to meet the specific
              needs of clients, ensuring the delivery of reliable, scalable, and
              high-quality software products.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              sint sit placeat minus temporibus molestiae iure adipisci, sed
              nisi. Provident itaque voluptate velit amet minus, at pariatur
              ducimus, reiciendis deleniti obcaecati culpa atque magnam error
              voluptates, debitis quisquam. Quas quasi veniam neque in incidunt
              iure porro eum deleniti nam minima, at, distinctio, praesentium
              explicabo commodi aperiam! Aspernatur adipisci minima totam
              ratione reiciendis cum corrupti asperiores iste excepturi! Modi
              eligendi dolores velit sequi, rerum cupiditate quas beatae
            </p>
          </div>
          <div>
            <div>
              <Image src={code} />
              <h3>Coding Language</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                debitis deserunt, fuga adipisci explicabo recusandae in impedit
                fugit ea repudiandae id maxime atque sequi delectus dolorem.
                Ipsa consequatur ut impedit sequi iusto libero laudantium nulla
                cupiditate, voluptate, quas fugiat qui! Veritatis culpa aliquam.
                
              </p>
              <h4>The Tools I Used</h4>
              <p>Context</p>
              <p>Hooks</p>
              <p>Stage management</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
