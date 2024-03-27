import Image from "next/image";
import { Inter } from "next/font/google";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import dev from "../../public/dev.png";




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
            <p className="text-md py5 text-gray-500 font-medium">
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
          <div className="w-60 h-60 rounded-full bg-blue-300 mx-auto relative mt-20 pt-5">
            <Image src={dev}/>
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
            <div className="text-center shadow-lg p-10 rounder-xl my-10">
              <Image className="m-auto" src={code} />
              <h3 className="text-lf font-md ">Coding Language</h3>
              <p className="py-4 leading-6">
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
            <div className="text-center shadow-lg p-10 rounder-xl my-10">
              <Image className="m-auto" src={design} />
              <h3 className="text-lf font-md ">Coding Language</h3>
              <p className="py-4 leading-6">
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
            <div className="text-center shadow-lg p-10 rounder-xl my-10">
              <Image className="m-auto" src={consulting} />
              <h3 className="text-lf font-md ">Coding Language</h3>
              <p className="py-4 leading-6">
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
        <section>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ab
            saepe libero expedita repellat ratione impedit accusamus aliquid
            debitis modi, incidunt, enim repellendus autem! Excepturi, beatae
            molestias expedita quibusdam sint reprehenderit ab, saepe distinctio
            culpa sunt quo? Porro delectus dignissimos nobis qui explicabo.
            Soluta et molestias, inventore placeat culpa aspernatur?
          </p>
          <div className="flex flex-col gap-16">
            <div className="basis-1/3 flex-1">
              <Image src={web1} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
