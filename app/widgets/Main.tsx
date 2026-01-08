export default function Main() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      <div className="w-full h-[50vh] bg-[url(/mobile/image-transform.jpg)] bg-no-repeat bg-center bg-cover sm:h-auto sm:col-start-2 sm:row-start-1 sm:bg-[url(/desktop/image-transform.jpg)]"></div>
      <div className="py-16 px-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:py-32 xl:px-24 2xl:px-44">
        <h2 className="text-this-h2/tight font-black">Tranform your brand</h2>
        <p className="text-this-grey-550 font-[barlow] text-[16px]">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          href="#"
          className="
          relative
          font-black
          text-[14px]
          
          after:content-['']
          after:absolute
          after:top-3
          after:left-[50%]
          after:-translate-x-[50%]
          after:h-2
          after:w-full
          after:bg-this-yellow-500/40
          after:rounded-sm
          after:z-[-1]
          after:transition-colors
          after:duration-200
          hover:after:bg-this-yellow-500
          "
        >
          LEARN MORE
        </a>
      </div>
      <div className="w-full h-[50vh] bg-[url(/mobile/image-stand-out.jpg)] bg-no-repeat bg-center bg-cover sm:h-auto sm:bg-[url(/desktop/image-stand-out.jpg)]"></div>
      <div className="py-16 px-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:py-32 xl:px-24 2xl:px-44">
        <h2 className="text-this-h2/tight font-black">
          Stand out to the right audience
        </h2>
        <p className="text-this-grey-550 font-[barlow] text-[16px]">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a
          href="#"
          className="
          relative
          font-black
          text-[14px]
          
          after:content-['']
          after:absolute
          after:top-3
          after:left-[50%]
          after:-translate-x-[50%]
          after:h-2
          after:w-[calc(100%+10px)]
          after:bg-this-red-400/40
          after:rounded-sm
          after:z-[-1]
          after:transition-colors
          after:duration-200
          hover:after:bg-this-red-400
          "
        >
          LEARN MORE
        </a>
      </div>
      <div className="px-8 py-14 w-full h-150 flex flex-col items-center justify-end gap-5 text-center bg-[url(/mobile/image-graphic-design.jpg)] bg-no-repeat bg-cover lg:bg-[url(/desktop/image-graphic-design.jpg)] lg:bg-center">
        <h3 className="text-this-green-800 text-this-h3 font-black">Graphic Design</h3>
        <p className="text-this-green-800 text-[15px] font-[barlow]">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
      </div>
      <div className="px-8 py-14 w-full h-150 flex flex-col items-center justify-end gap-5 text-center bg-[url(/mobile/image-photography.jpg)] bg-no-repeat bg-cover lg:bg-[url(/desktop/image-photography.jpg)] lg:bg-center">
        <h3 className="text-this-blue-800 text-this-h3 font-black">Photography</h3>
        <p className="text-this-blue-800 text-[15px] font-[barlow]">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </section>
  );
};
