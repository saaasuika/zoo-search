import { useNavigate } from 'react-router-dom';

const AnimalList = () => {
    const navigate = useNavigate();

    const handlePandaClick = () => {
        navigate('/zoo-search/panda');
    };
    const handleRabbitClick = () => {
        navigate('/zoo-search/rabbit');
    };
    const handleServalClick = () => {
        navigate('/zoo-search/serval');
    };
    const handleHorseClick = () => {
        navigate('/zoo-search/horse');
    };
    const handleSheepClick = () => {
        navigate('/zoo-search/sheep');
    };
    const handleAlpacaClick = () => {
        navigate('/zoo-search/alpaca');
    };
    const handleLionClick = () => {
        navigate('/zoo-search/lion');
    };
    const handleKoalaClick = () => {
        navigate('/zoo-search/koala');
    };
    const handleBearClick = () => {
        navigate('/zoo-search/bear');
    };
    const handleGorillaClick = () => {
        navigate('/zoo-search/gorilla');
    };
    const handleMonkeyClick = () => {
        navigate('/zoo-search/monkey');
    };


    return (
        <div className="animal-list">
            <div className="pic">
                <img className='animal_pic'
                    src="./image/alpaca.png"
                    alt="アルパカ"
                    onClick={handleAlpacaClick} 
                /> 
                <p>alpaca</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/rabbit.png"
                    alt="ウサギ"
                    onClick={handleRabbitClick} 
                />
                <p>rabbit</p>
            </div> 
            <div className="pic">
                <img className='animal_pic'
                    src="./image/horse.png"
                    alt="ウマ"
                    onClick={handleHorseClick} 
                /> 
                <p>horse</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/bear.png"
                    alt="クマ"
                    onClick={handleBearClick} 
                /> 
                <p>bear</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/koala.png"
                    alt="コアラ"
                    onClick={handleKoalaClick} 
                /> 
                <p>koala</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/gorilla.png"
                    alt="ゴリラ"
                    onClick={handleGorillaClick} 
                /> 
                <p>gorilla</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/serval.png"
                    alt="サーバル"
                    onClick={handleServalClick} 
                />
                <p>serval</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/monkey.png"
                    alt="サル"
                    onClick={handleMonkeyClick} 
                /> 
                <p>monkey</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/panda.png"
                    alt="パンダ"
                    onClick={handlePandaClick} 
                    
                />
                <p>panda</p>
            </div>  
            <div className="pic">
                <img className='animal_pic'
                    src="./image/sheep.png"
                    alt="ヒツジ"
                    onClick={handleSheepClick} 
                /> 
                <p>sheep</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="./image/lion.png"
                    alt="ライオン"
                    onClick={handleLionClick} 
                /> 
                <p>lion</p>
            </div>
        </div>    
    );
};

export default AnimalList;
