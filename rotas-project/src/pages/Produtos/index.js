import { useParams } from 'react-router-dom';
import './style.css';

function Produto() {

    const { id } = useParams();

    if (id === 'playstation') {
        return (
            <div className='produto-container'>
                <div className='produto-info'>
                    <h1>Console Sony PlayStation 5</h1><br />
                    <h2>R$4.445,00</h2><br />
                    <h3>À vista no Pix e boleto (10% off)</h3>
                </div>
                <img src="https://cdn.awsli.com.br/1919/1919257/arquivos/imagem_2021-12-03_141412.png" alt="Console PlayStation 5"></img>
            </div>
        )
    }

    if (id === 'xbox') {
        return (
            <div className='produto-container'>
                <div className='produto-info'>
                    <h1>Console Microsoft Xbox Series X</h1>
                    <h2>R$4.799,00</h2><br />
                    <h3>À vista no Pix ou em até 10x de R$479,00 sem juros no cartão</h3><br />
                </div>
                <img src="https://assets.xboxservices.com/assets/cb/f8/cbf83b9d-bf30-4e36-96ad-fef4293ff944.png?n=XBX-CMP-L-Console_Large-D_02.png" alt="Console Xbox X"></img>
            </div>
        )
    }

    if (id === 'atari') {
        return (
            <div className='produto-container'>
                <div className='produto-info'>
                    <h1>Console Atari Flashback 8</h1><br />
                    <h2>R$1.299,00</h2><br />
                    <h3>À vista no Pix ou em até 10x de R$129,90 sem juros no cartão</h3>
                </div>

                <img src="https://http2.mlstatic.com/D_NQ_NP_914504-MLA40540552768_012020-O.webp" alt="Console Atari Flashback 8"></img>
            </div>
        )
    }

    if (id === 'supernintendo') {
        return (
            <div className='produto-container'>
                <div className='produto-info'>
                    <h1>Console Nintendo Super NES Classic Edition</h1><br />
                    <h2>R$1.299,00</h2><br />
                    <h3>À vista no Pix ou em até 10x de R$129,90 sem juros no cartão</h3>
                </div>
                <img src="https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_super_nintendo_snes_classic_edition_console_video_game_nintendo_23741_1_20201211171549.jpg" alt="Console Nintendo Super NES Classic Edition"></img>
            </div>
        )
    }

}

export default Produto;