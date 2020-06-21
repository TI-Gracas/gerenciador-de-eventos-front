import React from 'react'

import './Main.css';

export default () =>
    <div className="main">
        {/* TODO: Extrair esse bloco para um componente */}
        <div className="form card">
            <h2>Agendamento para Celebrações</h2>
            <p>é de fundamental importância que os dados fornecidos estejam corretos, para que possamos gerenciar de maneira correta e atentendo as exigências dos órgãos competentes.</p>
        </div>
        {/* TODO: Extrair esse bloco para um componente */}
        <div className="info card">
            <h2>Cuide de Você e da comunidade</h2>
            <p>Evite Aglomerações antes e depois das Missas;</p>
            <p>Utilize a máscara em todo o percurso até a igreja, como também durante e após a celebração;</p>
            <p>Lave bem as mãos e use sempre álcool em gel A70;</p>
            <p>Respeite o distanciamento social;</p>
        </div>
    </div>