import InLink from 'components/shared/InLink';
const DesktopNav = ({ links }) => {
  return (
    <ul className="items-center hidden ml-3 divide-x lg:flex">
      {links.map((each) => (
        <li key={each.label} className="px-2">
          <InLink
            href={each.link}
            className="relative font-medium text-gray-800 capitalize transition-all rounded hover:text-primary active:text-primary h-link">
            {each.label}
          </InLink>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
