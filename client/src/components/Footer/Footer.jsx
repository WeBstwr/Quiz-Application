import "./footer.css";
import today from "../../utils/date.js";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {today()} Webster Ifedha. All rights reserved</p>
    </div>
  );
};

export default Footer;
