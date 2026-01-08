import TestimonalsItem from "../components/TestimonialsItem";

export default function Testimonials() {
  return (
    <section className="py-12 flex flex-col items-center gap-12 lg:px-12 2xl:px-36">
      <h4 className="text-this-grey-400 text-this-h4 tracking-widest">
        CLIENT TESTIMONIALS
      </h4>
      <div className="flex flex-col items-center gap-14 md:flex-row md:items-start md:gap-10 2xl:gap-0">
        <TestimonalsItem
          source="/image-emily.jpg"
          name="Emily R."
          position="Marketing Director"
        >
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </TestimonalsItem>
        <TestimonalsItem
          source="/image-thomas.jpg"
          name="Thomas S."
          position="Chief Operating Officer"
        >
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </TestimonalsItem>
        <TestimonalsItem
          source="/image-jennie.jpg"
          name="Jennie F."
          position="Business Owner"
        >
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </TestimonalsItem>
      </div>
    </section>
  );
};
