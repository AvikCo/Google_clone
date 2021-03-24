import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import '../styles/header.css';


const Header = () => {
  return (
      <div className="header">
      <a href="https://mail.google.com/mail">Gmail</a>
      <a href="#">Images</a>
      <AppsIcon style={{color: 'gray'}} className="header__icon"/>
      <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHGVIKBumYhxQ/profile-displayphoto-shrink_400_400/0/1554026022479?e=1619654400&v=beta&t=zFhdCZtH4AnnqhbI2ZyCK7m3jlMu8zCtJgaM3KjVNyc" className="header__avatar"/>
      </div>
      );
}

export default Header;