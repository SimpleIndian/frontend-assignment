const NewsLetter = () => {
  return (
    <div className="flex flex-col items-end sm:items-start">
      <form action="">
        <label htmlFor="userEmail" className="text-gray-600">
          Sign up to receive the latest articles
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          required
          placeholder="Your email address"
          className="w-full p-3 my-3 border rounded outline-none md:w-1/2 lg:w-full focus:ring-1"
        />
      </form>

      <button type="submit" className="px-4 py-2 text-white rounded bg-primary">
        Submit
      </button>
    </div>
  );
};

export default NewsLetter;
