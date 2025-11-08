import React from 'react';

import '../styles/home.css'; 

const Home2Page: React.FC = () => {
  return (
    <div className="home-container">
      <div className="ad-sidebar">
        <p>#Крута реклама</p>
        <p>Крутий текст 2</p>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHmEGjG1o-9p30AJEhNBZXwxxTsQ6K-A40Q&s" alt="Реклама 1" style={{ marginTop: '15px' }} />
      </div>

      <div className="main-content">
        <h1 className="casino-title">Вас вітає казино ZeBetXX!</h1>
        <p className="info-text">
          ВСІ гроші підуть на фігню:
          <br /> Олександру 1 - на ртх 5090.
          <br /> Захару 2 - на кваритру в печерську.
          <br /> Артем 3 - на деп в інше казино.
          <br /> Олександру 4 - на віллу в Іспанії.
        </p>
        <p className="info-text" style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
          Депни
        </p>
        
        <img src="https://images.steamusercontent.com/ugc/1749054326756881345/2ABC218342A07A73951B273D323A4F1B9F72CD13/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Лого казино" style={{ marginTop: '30px', borderRadius: '8px' }} />
      </div>

      <div className="ad-sidebar">
        <p>Ще одна реклама!</p>
        <p>Продай гараж</p>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZQBtrPwaCHwQ8-iBrPC84Cd4vb73to4S4g&s" alt="Реклама 2" style={{ marginTop: '15px' }} />
      </div>
    </div>
  );
};


export default Home2Page;
