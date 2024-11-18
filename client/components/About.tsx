
export default function About() {

 return (
  <div className="flex flex-col px-5 py-10 mx-auto max-w-[900px]">
    <h1 
      className="text-4xl text-center mb-5 font-light font-lato">About me
    </h1>
    <p className="italic text-center ">
    Exploring trails gives me purpose, offering the clarity and balance I seek every day.
    </p>
      <img 
        src="/images/about.jpg" alt="Hiking the routeburn" className="rounded-[10px] my-5">
      </img>
      
    <p className="text-left pb-2">
    As a native Australasian, I grew up exploring the rugged, rocky outback of Australia before moving to the lush, awe-inspiring mountains of New Zealand. My love for the outdoors has shaped who I am and inspired me to create We Hike—an app designed to make hiking accessible to everyone.
    </p>
    <p className="">
    I&apos;m passionate about promoting safety, preparedness, and knowledge for adventurers exploring New Zealand&apos;s wild and beautiful wilderness. Whether you&apos;re a seasoned trekker or just starting out, We Hike is here to help you make the most of your journey.
    </p>
  </div>
 )
}