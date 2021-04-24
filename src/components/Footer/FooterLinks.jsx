import InLink from 'components/shared/InLink';

const FooterLinks = ({ footLinks }) => {
  return (
    <div>
      <h3 className="relative text-lg font-medium capitalize text-secondary custom-heading">
        {footLinks.heading}
      </h3>
      <ul className="pl-6 my-5 space-y-3 capitalize md:flex-row">
        {footLinks.links.map((each) => (
          <li key={each.label} className="relative my-4 bullets">
            <InLink href={each.link} className="block text-sm text-gray-600 hover:text-gray-800 ">
              {each.label}
            </InLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
