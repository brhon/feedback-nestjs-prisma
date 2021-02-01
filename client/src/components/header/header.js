import "./header.css";

function Header() {
  /* reload the page when the logo is clicked*/
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="header header-flex">
      <p className="header-text" onClick={reloadPage}>
        💡 feedback-nest-prima
      </p>
    </div>
  );
}

export default Header;
