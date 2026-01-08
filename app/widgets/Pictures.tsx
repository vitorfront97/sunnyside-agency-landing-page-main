export default function Pictures() {
  return (
    <section className="w-full h-90 grid grid-cols-2 sm:h-150 md:h-180 lg:h-80 lg:grid-cols-4 xl:h-100 2xl:h-120">
      <div className="columns-1 bg-[url(/mobile/image-gallery-milkbottles.jpg)] bg-no-repeat bg-top bg-cover lg:bg-[url(/desktop/image-gallery-milkbottles.jpg)]"></div>
      <div className="bg-[url(/mobile/image-gallery-orange.jpg)] bg-no-repeat bg-top bg-cover lg:bg-[url(/desktop/image-gallery-orange.jpg)]"></div>
      <div className="bg-[url(/mobile/image-gallery-cone.jpg)] bg-no-repeat bg-top bg-cover lg:bg-[url(/desktop/image-gallery-cone.jpg)]"></div>
      <div className="bg-[url(/mobile/image-gallery-sugar-cubes.jpg)] bg-no-repeat bg-top bg-cover lg:bg-[url(/desktop/image-gallery-sugarcubes.jpg)]"></div>
    </section>
  );
};