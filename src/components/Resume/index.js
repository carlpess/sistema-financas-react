import './style.css';

function Resume() {
    return (
        <div className='container-resume'>
            <h1>Resumo</h1>

            <div className='line-resume'>
                <span>Entradas</span>
                <span className='in'>1500</span>
            </div>

            <div className='line-resume'>
                <span>Saídas</span>
                <span className='out'>2500</span>
            </div>

            <div className='horizontal-line'></div>

            <div className='line-resume'>
                <h3>Saldo</h3>
                <span className='resume'>-1000</span>
            </div>
        </div>
    )
}

export default Resume;