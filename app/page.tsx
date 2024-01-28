import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-10 gap-y-10">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Alexander Lai&#39;s Blog
      </h1>
      <div className="flex flex-col justify-between min-h-full">
        <h2 className="border-b pb-2 text-3xl font-semibold">
          Welcome to my blog!
        </h2>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          About me
        </h3>
        <p className="pt-4 text-lg">
          Hi! I&#39;m Alexander Lai. I&#39;m currently a final year student at UNSW, studying Computer Science 👨‍💻
        </p>
        <p className="pt-4">
          I&#39;m passionate about technology, and how it can be applied into everyday life 😎
        </p>
        <p className="pt-2">
          Just a bit of background information about myself. I have experience within both the business and tech industries, partaking in internships for both software engineering and assurance.
          If you want to know more about those experiences, there will be blog posts in this website talking about them!
        </p>
        <p className="pt-10">
          This website is basically my personal blog where I just talk about what is on my mind or what I&#39;m interested in.
          This can include blog posts about certain technologies, my experiences, and/or anything that is on my mind 🤗
        </p>
        <p className="pt-4">
          If you are interested in reaching out for any reason, please don&#39;t hesitate to contact me via LinkedIn or email.
        </p>
        <p className="pt-4">
          Thanks for stopping by!
        </p>
        <div className="pt-10 flex flex-col gap-6">
          <div className="flex flex-row items-center gap-4">
            <Icons.gitHub className="mr-2 h-10 w-10" />
            <a className="font-medium text-primary underline underline-offset-4" href="https://github.com/alexlai18">https://github.com/alexlai18</a>
          </div>
          <div className="flex flex-row items-center gap-4">
           <Icons.email className="mr-2 h-11 w-11" />
           <a className="font-medium text-primary underline underline-offset-4" href="mailto:alaiier18@gmail.com">alaiier18@gmail.com</a>
          </div>
          <div className="flex flex-row items-center gap-4">
           <Icons.website className="mr-2 h-11 w-11" />
           <a className="font-medium text-primary underline underline-offset-4" href="https://alexanderlai.netlify.app/">https://alexanderlai.netlify.app/</a>
          </div>
        </div>
      </div>
    </main>
  );
}
