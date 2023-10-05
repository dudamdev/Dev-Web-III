import './style.css';

export default function Contato() {
    return (
        <div >

            <div className="contato-container">
                <h2 >Faculdade de Tecnologia de Franca • Fatec Franca</h2>

                <div className='contato-container-info'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.7880340169777!2d-47.40326922532144!3d-20.514913781008936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b93c4b5f%3A0xbe0e42f3aa42525c!2sFatec%20Franca%20-%20Faculdade%20de%20Tecnologia%20de%20Franca%20Dr%20Thomaz%20Novelino!5e0!3m2!1spt-BR!2sbr!4v1695900017980!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        title="Mapa da localização da empresa"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="contact-info">
                        <p>CNPJ/MF: 62.823.257/0109-10</p>
                        <address>
                            Rua Irênio Grecco nº 4580<br />
                            Vila Imperador<br />
                            Franca/SP<br />
                            14405-191<br />
                        </address>
                        <p>Telefone: (16) 3702-3204<br />
                            Fax: (16) 3702-2854</p>
                        <div className="email-box">
                            <p>E-mail: <a className="yellow-link" href="mailto:secretaria@fatecfranca.edu.br">secretaria@fatecfranca.edu.br</a><br />
                                <span>Sempre verifique a pasta de Spam/Lixo eletrônico ao buscar respostas de e-mails da Fatec Franca</span></p>
                        </div>
                        <h3>Linhas de ônibus urbano</h3>
                        <ul>
                            <li><a className="yellow-link" href="https://www.google.com/maps/d/embed?mid=1y3BAGEeg-6s614VNHtMBvgl_v8c&amp;ll=-20.52449736463766%2C-47.39961415529251&amp;z=14" target="_blank" rel="noreferrer">J08 (Vl. Imperador)</a> – ponto na R. Irênio Grecco</li>
                            <li><a className="yellow-link" href="https://www.google.com/maps/d/embed?mid=10nQcqVUeQMmhW6a2ipH8BQO0scg&amp;ll=-20.523652091552172%2C-47.39405795931816&amp;z=14" target="_blank" rel="noreferrer">C01 (Circular 01)</a>, <a className="yellow-link" href="https://www.google.com/maps/d/embed?mid=1YUdAFhs5C6kaX22R9sDZikIFo5c&amp;ll=-20.53184840667347%2C-47.39531859722774&amp;z=13" target="_blank" rel="noreferrer">C02 (Circular 02)</a> e <a className="yellow-link" href="https://www.google.com/maps/d/embed?mid=1aeQB7ErUO_9FBZwD3wOYpCgC1s4&amp;ll=-20.510113002464585%2C-47.40521861347656&amp;z=15" target="_blank" rel="noreferrer">LDN (Linha Direta Norte)</a> – ponto na Av. Orlando Dompieri</li>
                            <li><a className="yellow-link" href="https://www.google.com/maps/d/u/1/embed?mid=1BCX3U4LHgDo37wvhApSk3OKk64Q&amp;ll=-20.525095207270365%2C-47.397758066654205&amp;z=14" target="_blank" rel="noreferrer">J09 (Vl. Imperador via Jd. Planalto)</a> – ponto na R. Realindo Jacinto Mendonça</li>
                        </ul>
                        <p className="pull-right small"><i>Fonte: <a className="yellow-link" href="//empresasaojose.com.br" target="_blank" rel="noreferrer">Empresa São José</a></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}