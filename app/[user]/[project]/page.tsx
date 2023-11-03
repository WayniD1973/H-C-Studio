export default function Page({ params }: { params: { project: string } }) {
  return (
    <main>
      <nav className="topNav" id="topNav">
        <div className="menuButton" id="menuButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="menuButtonIcon" id="menuButtonIcon" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
      </nav>
    </main>
  )
}