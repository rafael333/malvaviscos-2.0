export interface GuideItem {
    id: string;
    title: string;
    description: string;
    image: string;
    componentKey: 'marshmallow' | 'sales' | 'minidonas' | 'pdf' | 'coming_soon';
    pdfUrl?: string;
}

export const guides: GuideItem[] = [
    {
        id: 'g1',
        title: 'Guía de Malvaviscos Caseros',
        description: 'Aprende a hacer malvaviscos perfectos sin horno. Técnicas, ingredientes y moldeado.',
        image: '/guia_1.png',
        componentKey: 'marshmallow'
    },
    {
        id: 'g2',
        title: 'Guía de Ventas',
        description: 'Estrategias para vender más, calcular precios y usar redes sociales.',
        image: '/guia_ventas.png',
        componentKey: 'sales'
    },
    {
        id: 'g3',
        title: 'Guía de Mini Donas',
        description: 'Recetas deliciosas y técnicas de decoración para mini donas.',
        image: '/guia_minidonas.png',
        componentKey: 'minidonas',
        pdfUrl: '/guides/mini_donas.pdf'
    },
    {
        id: 'b1',
        title: '25 Moldes Imprimibles',
        description: 'Colección de moldes listos para imprimir y usar en tus figuras.',
        image: '/bonus/moldes_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/25_moldes.pdf'
    },
    {
        id: 'b2',
        title: 'Control Financiero',
        description: 'Plantilla para gestionar tus costos, ganancias y gastos del negocio.',
        image: '/bonus/control_financiero_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/control_financiero.pdf'
    },
    {
        id: 'b3',
        title: 'Control de Pedidos',
        description: 'Formulario para organizar tus encargos y no perder ningún detalle.',
        image: '/bonus/control_pedidos_cover.png',
        componentKey: 'pdf',
        pdfUrl: '/bonus/control_pedidos.pdf'
    },
    {
        id: 'g4',
        title: 'Pack Creativo',
        description: 'Próximamente: Aprende a usar aerógrafo y matizadores.',
        image: '/pack_creativo.png',
        componentKey: 'coming_soon'
    }
];
