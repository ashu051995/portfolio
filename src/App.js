
import './App.css';
import UserInfo from "./user-info"
import UserDetail from "./user-detail"

function App() {
  return (
    <div className="body-container">
      <div className='info-container'><UserInfo/></div>
<div className='main-container'>
<UserDetail/>
</div>
    </div>
  );
}

export default App;
