import { useNavigate } from 'react-router-dom';

const AnimalList = () => {
    const navigate = useNavigate();

    const handlePandaClick = () => {
        navigate('/panda');
    };
    const handleRabbitClick = () => {
        navigate('/rabbit');
    };
    const handleServalClick = () => {
        navigate('/serval');
    };
    const handleHorseClick = () => {
        navigate('/horse');
    };
    const handleSheepClick = () => {
        navigate('/sheep');
    };
    const handleAlpacaClick = () => {
        navigate('/alpaca');
    };
    const handleLionClick = () => {
        navigate('/lion');
    };
    const handleKoalaClick = () => {
        navigate('/koala');
    };
    const handleBearClick = () => {
        navigate('/bear');
    };
    const handleGorillaClick = () => {
        navigate('/gorilla');
    };
    const handleMonkeyClick = () => {
        navigate('/monkey');
    };


    return (
        <div className="animal-list">
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/alpaca.png"
                    alt="アルパカ"
                    onClick={handleAlpacaClick} 
                /> 
                <p>alpaca</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/rabbit.png"
                    alt="ウサギ"
                    onClick={handleRabbitClick} 
                />
                <p>rabbit</p>
            </div> 
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/horse.png"
                    alt="ウマ"
                    onClick={handleHorseClick} 
                /> 
                <p>horse</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/bear.png"
                    alt="クマ"
                    onClick={handleBearClick} 
                /> 
                <p>bear</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/koala.png"
                    alt="コアラ"
                    onClick={handleKoalaClick} 
                /> 
                <p>koala</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/gorilla.png"
                    alt="ゴリラ"
                    onClick={handleGorillaClick} 
                /> 
                <p>gorilla</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/serval.png"
                    alt="サーバル"
                    onClick={handleServalClick} 
                />
                <p>serval</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/monkey.png"
                    alt="サル"
                    onClick={handleMonkeyClick} 
                /> 
                <p>monkey</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/panda.png"
                    alt="パンダ"
                    onClick={handlePandaClick} 
                    
                />
                <p>panda</p>
            </div>  
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/sheep.png"
                    alt="ヒツジ"
                    onClick={handleSheepClick} 
                /> 
                <p>sheep</p>
            </div>
            <div className="pic">
                <img className='animal_pic'
                    src="public/image/lion.png"
                    alt="ライオン"
                    onClick={handleLionClick} 
                /> 
                <p>lion</p>
            </div>
        </div>    
    );
};

export default AnimalList;
