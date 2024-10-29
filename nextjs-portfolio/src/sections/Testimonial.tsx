import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];


const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24">
    <div className="container">
        <SectionHeader title="Happy Clients" content="What Clients Say About Me" description="Don&apos;t just take my word for it. See what my clients have to say about my work"/>
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-8">
            {testimonials.map(testmonial => (        
                <Card key={testmonial.name} className="max-w-xs md:max-w-md  p-6 md:p-8">
                <div className="flex gap-4 items-center"> 
                <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                <Image src={testmonial.avatar} alt={testmonial.name} className="max-h-full"/>
                </div>
                <div>
                    <div className="font-semibold">{testmonial.name}</div>
                    <div className="text-sm text-white/40">{testmonial.position}</div>
                </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testmonial.text}</p>
                </Card>
            ))}
            </div>
        </div>
    </div>
    </section>
  )
}

export default TestimonialSection