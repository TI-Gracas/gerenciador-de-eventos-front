import React from 'react'

import './Main.css'
import Card from '../card/Card'

export default () =>
    <main className="main">
        <Card title="Agendamento para Celebrações">
            <p>
                É de fundamental importância que os dados fornecidos estejam corretos, 
                para que possamos gerenciar de maneira correta e atentendo as exigências dos órgãos competentes.
            </p>
        </Card>
        <Card title="Cuide de Você e da comunidade" backgroundColor="blue">
            <div>
                <p>Evite Aglomerações antes e depois das Missas;</p>
                <p>Utilize a máscara em todo o percurso até a igreja, como também durante e após a celebração;</p>
                <p>Lave bem as mãos e use sempre álcool em gel A70;</p>
                <p>Respeite o distanciamento social;</p>
            </div>
        </Card>
    </main>