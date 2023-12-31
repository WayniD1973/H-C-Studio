import "@/styles/project.css";

export default function Page({
  params,
}: {
  params: { project: string; user: string };
}) {
  return (
    <main>
      <nav className="topNav" id="topNav">
        <div className="topNavLeftItemsContainer" id="topNavLeftItemsContainer">
          <div className="menuButton" id="menuButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="menuButtonIcon"
              id="menuButtonIcon"
              width="40"
              height="40"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
          <div className="topNavTitle" id="topNavTitle">
            <div className="topNavLogo" id="topNavLogo">
              <img
                src="/Logo.png"
                alt="Studio Logo"
                className="topNavLogoImage"
                id="topNavLogoImage"
              />
            </div>
            <div className="topNavProjectName" id="topNavProjectName">
              <p className="topNavProjectNameText" id="topNavProjectNameText">
                {params.project}
              </p>
            </div>
          </div>
        </div>
        <div className="topNavUsername" id="topNavUsername">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="topNavUsernameImage"
            id="topNavUsernameImage"
            width="40"
            height="40"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="topNavUsernameText" id="topNavUsernameText">
            {params.user}
          </p>
        </div>
      </nav>
    </main>
  );
}
