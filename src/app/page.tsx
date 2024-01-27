import Image from "next/image";

import Card from "@/components/StarsCard";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col py-20 px-4 md:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-4 mb-12 md:flex-1">
            <h1 className="text-center text-3xl max-w-48 mx-auto text-primary-dark_magenta font-bold md:text-5xl md:max-w-[20rem] md:mx-0 md:text-start">
              10,000+ of our users love our products
            </h1>
            <p className="text-center text-neutral-grayish_magenta md:text-start md:text-md md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              voluptate eaque, hic animi, tempora neque excepturi deserunt
              aliquam facilis, praesentium odio eum. Placeat accusamus
            </p>
          </div>
          <section className="flex flex-col gap-4 md:flex-1 md:items-center md:justify-center">
            <Card starsCount={5} review={"Rated 5 Stars in Reviews"}></Card>
            <Card starsCount={5} review={"Rated 5 Stars in Reviews"}></Card>
            <Card starsCount={5} review={"Rated 5 Stars in Reviews"}></Card>
          </section>
        </div>
        <section className="flex flex-col gap-8 mt-8  lg:flex-row lg:mt-12 ">
          <ReviewCard
            name={"Colton Smith"}
            text={"Verified Buyer"}
            image={"/images/image-colton.jpg"}
            review={`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"`}
          ></ReviewCard>
          <ReviewCard
            name={"Anne Johnson"}
            text={"Verified Buyer"}
            image={"/images/image-anne.jpg"}
            review={`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"`}
          ></ReviewCard>
          <ReviewCard
            name={"Irene Doe"}
            text={"Verified Buyer"}
            image={"/images/image-irene.jpg"}
            review={`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"`}
          ></ReviewCard>
        </section>
      </section>
    </main>
  );
}
