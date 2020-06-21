import React from 'react'

import './Header.css'
import Logo from '../../assets/imgs/logo.png'

export default () =>
    <header className="header">
        <img src={Logo} alt="Logo" className="header-logo"/>
        <div className="header-info">
            <h1>Paróquia N. Sra. das Graças</h1>
            <h2>Sistema para reserva de vagas nas celebrações Paroquiais</h2>
            <span>Rua: Amazonas - 590, Liberdade, CEP: 58414-280</span>
            <span>Campina Grande - PB</span>
        </div>
    </header>