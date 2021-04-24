const ChapSection = () => {
  return (
    <section className="justify-center max-w-6xl m-auto my-10 space-y-10 md:space-y-0 md:space-x-10 md:justify-around md:items-center md:flex">
      <div>
        <img src="/images/CHAP.png" alt="chap" className="m-auto" />
      </div>
      <div className="p-4 md:w-1/2">
        <h2 className="pb-3 text-2xl font-semibold text-gray-700">
          CHAP Accreditation and this line can be about this big
        </h2>
        <p className="text-gray-600">
          UniversaCare, LLC will provide the following home health care programs at flexible
          schedules and cost-friendly service rates.
        </p>
      </div>
    </section>
  );
};

export default ChapSection;
