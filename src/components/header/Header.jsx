import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      Header
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
        </div>
      </div>
    </div>
  );
};

export default Header;
