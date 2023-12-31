import PropTypes from "prop-types";

function Header(props) {
  return (
    <div>
      <header className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold text-center">{props.title}</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
