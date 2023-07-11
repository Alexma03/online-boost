function Text() {
  return (
    <div className="grid grid-cols-2 md:flex md:justify-center gap-4 m-6 mt-20 mb-32">
      <div className="flex flex-col items-center h-86 justify-between mx-2 lg:mx-8">
        <h2 className="text-xl m-2 lg:text-3xl">Creación y diseño Web</h2>
        <img
          src="imgs/webDevelopment.svg"
          alt="Desarrollo web"
          className="border-black border-b pb-8 w-52 lg:w-80 mt-4"
        />
      </div>
      <div className="flex flex-col items-center h-86 justify-between mx-2 lg:mx-8">
        <h2 className="text-xl m-2 lg:text-3xl">Google Ads Management</h2>
        <img
          src="imgs/marketing.svg"
          alt="Marketing"
          className="border-black border-b pb-8 w-52 lg:w-80 mt-4"
        />
      </div>
      <div className="flex flex-col items-center h-86 justify-between mx-2 lg:mx-8">
        <h2 className="text-xl m-2 lg:text-3xl">Hosting, Dominio y SEO</h2>
        <img
          src="imgs/hosting.svg"
          alt="Hosting"
          className="border-black border-b pb-8 w-52 lg:w-80 mt-4"
        />
      </div>
      <div className="flex flex-col items-center h-86 justify-between mx-2 lg:mx-8">
        <h2 className="text-xl m-2 lg:text-3xl">Social Media Marketing</h2>
        <img
          src="imgs/socialMedia.svg"
          alt=""
          className="border-black border-b pb-8 w-52 lg:w-80 mt-4"
        />
      </div>
    </div>
  );
}

export default Text;
