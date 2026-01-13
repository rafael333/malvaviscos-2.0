import { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
    {
        id: '1',
        title: 'Receta de Malvaviscos Caseros (Nubes)',
        duration: '7:33',
        category: 'Decoración',
        imageUrl: '/aeracao-nuvens.png',
        description: 'Este video enseña a hacer figuras de animales utilizando una receta simple de malvaviscos (nubes)',
        videoUrl: 'https://youtu.be/7vx3uRtXN28',
        ingredients: [
            { name: 'Azúcar', icon: 'cookie', details: '200 g' },
            { name: 'Jarabe de azúcar invertido', icon: 'water_drop', details: '80 g (puede ser sustituido por glucosa de maíz)' },
            { name: 'Agua para el jarabe', icon: 'water_drop', details: '60 ml' },
            { name: 'Gelatina en polvo', icon: 'science', details: '13 g' },
            { name: 'Agua para hidratar la gelatina', icon: 'water_drop', details: '65 ml' },
            { name: 'Sal', icon: 'auto_awesome', details: 'una pizca' },
            { name: 'Para decorar', icon: 'palette', details: 'Colorantes alimentarios en gel, bolígrafos de tinta comestible, almidón de maíz y azúcar en polvo (para espolvorear)' }
        ],
        steps: [
            { id: 1, title: 'Preparar la Gelatina y el Jarabe', isCompleted: false, isLocked: false, startTime: 66 },
            { id: 2, title: 'Derretir la Gelatina', isCompleted: false, isLocked: true, startTime: 75 },
            { id: 3, title: 'Batir la Masa con el Jarabe', isCompleted: false, isLocked: true, startTime: 92 },
            { id: 4, title: 'Colorear la Masa', isCompleted: false, isLocked: true, startTime: 129 },
            { id: 5, title: 'Preparar la Superficie', isCompleted: false, isLocked: true, startTime: 175 },
            { id: 6, title: 'Moldear los Animales', isCompleted: false, isLocked: true, startTime: 195 },
            { id: 7, title: 'Hacer Detalles y Miembros', isCompleted: false, isLocked: true, startTime: 218 },
            { id: 8, title: 'Corregir Imperfecciones', isCompleted: false, isLocked: true, startTime: 248 },
            { id: 9, title: 'Secado y Espolvorear', isCompleted: false, isLocked: true, startTime: 405 },
            { id: 10, title: 'Dibujar Rostros y Expresiones', isCompleted: false, isLocked: true, startTime: 461 }
        ]
    },
    {
        id: '2',
        title: 'Malvavisco Unicornio',
        duration: '5:27',
        category: 'Decoración',
        imageUrl: '/unicorn-marshmallow.webp',
        description: 'Este video se enfoca en el arte de la finalización decorativa, enseñando cómo dibujar rostos delicados y expresivos en malvaviscos de nubes. Aprenderás técnicas de pintura manual y el uso de herramientas específicas para asegurar que cada dulce tenga un acabado profesional y encantador',
        videoUrl: 'https://youtu.be/NkHc2Qz5U9I',
        ingredients: [
            { name: 'Gelatina', icon: 'water_drop', details: '24g de gelatina en láminas (hidratada en agua fría)' },
            { name: 'Jarabe de Azúcar', icon: 'cookie', details: '130g de azúcar refinado, 20g de agua, 20g de miel y 20g de glucosa de maíz' },
            { name: 'Merengue', icon: 'egg', details: '70g de claras de huevo y 40g de azúcar refinado' },
            { name: 'Finalización', icon: 'auto_awesome', details: 'Colorantes alimentarios variados y mezcla de azúcar glas con almidón de maíz (1:1)' }
        ],
        steps: [
            { id: 1, title: 'Hidratación de la Gelatina', isCompleted: false, isLocked: false, startTime: 15 },
            { id: 2, title: 'Preparación del Jarabe', isCompleted: false, isLocked: true, startTime: 50 },
            { id: 3, title: 'Batir el Merengue', isCompleted: false, isLocked: true, startTime: 80 },
            { id: 4, title: 'Incorporación del Jarabe y Gelatina', isCompleted: false, isLocked: true, startTime: 112 },
            { id: 5, title: 'Coloración y Modelado', isCompleted: false, isLocked: true, startTime: 140 },
            { id: 6, title: 'Secado y Acabado', isCompleted: false, isLocked: true, startTime: 280 },
            { id: 7, title: 'Resultado Final', isCompleted: false, isLocked: true, startTime: 334 }
        ]
    },
    {
        id: 'p1',
        title: 'Malvavisco casero',
        duration: '03:22',
        category: 'Principiante',
        isPopular: true,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwFlUUkZTzAurQbZJCQ-W5VJCEAVEMwS6UcaHgS753mGzhv17nqTMSFQdnnzbesaJPTvPYFLQybVYds1PjCMeOVpWbUAiLCNPTXYQM5_W2ELJ3Z7ni896BlaKavZipXFfrFLSu_wPLukmLN51hnPNvTKKlNra8EZFuFHFqdpsjV5x1RX1XFTaC0VYz6QL6sBnbYYeFduEXQzMFD5zHN2lHcb1Su9_b0912BPKVIm3D3Zoz1PzKj_dIAmhd50lu-twdF6gl2f1KTtsC',
        description: 'Este video es un tutorial detallado que enseña cómo hacer malvaviscos caseros en forma de \'nubes\' de manera artesanal.',
        videoUrl: 'https://youtu.be/IfdnqLMZ16A',
        steps: []
    },
    {
        id: 'p2',
        title: 'Malvavisco Unicornio',
        duration: '5:27',
        category: 'Decoración',
        isPopular: true,
        imageUrl: '/unicorn-marshmallow.webp',
        description: 'Este video se enfoca en el arte de la finalización decorativa, enseñando cómo dibujar rostos delicados y expresivos en malvaviscos de nubes.',
        videoUrl: 'https://youtu.be/NkHc2Qz5U9I',
        steps: []
    },
    {
        id: 'highlight',
        title: 'Malvavisco casero',
        duration: '03:22',
        category: 'Principiante',
        isHighlight: true,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwFlUUkZTzAurQbZJCQ-W5VJCEAVEMwS6UcaHgS753mGzhv17nqTMSFQdnnzbesaJPTvPYFLQybVYds1PjCMeOVpWbUAiLCNPTXYQM5_W2ELJ3Z7ni896BlaKavZipXFfrFLSu_wPLukmLN51hnPNvTKKlNra8EZFuFHFqdpsjV5x1RX1XFTaC0VYz6QL6sBnbYYeFduEXQzMFD5zHN2lHcb1Su9_b0912BPKVIm3D3Zoz1PzKj_dIAmhd50lu-twdF6gl2f1KTtsC',
        description: 'Este video es un tutorial detallado que enseña cómo hacer malvaviscos caseros en forma de \'nubes\' de manera artesanal. El contenido se enfoca en técnicas de repostería para obtener la textura ideal y el acabado visual necesario para este tipo de dulce decorado',
        videoUrl: 'https://youtu.be/IfdnqLMZ16A',
        ingredients: [
            { name: '250 ml de agua caliente', icon: 'water_drop' },
            { name: '20 g de gelatina sin sabor', icon: 'science' },
            { name: '20 g de gelatina de fresa', icon: 'science', details: 'O otro sabor de tu preferencia' },
            { name: '500 g de azúcar refinado', icon: 'cookie' },
            { name: 'Mantequilla y azúcar extra', icon: 'auto_awesome', details: 'Para engrasar y espolvorear' }
        ],
        steps: [
            { id: 1, title: 'Mezcla del agua con las gelatinas', isCompleted: false, isLocked: false, startTime: 0 },
            { id: 2, title: 'Adición del azúcar refinado', isCompleted: false, isLocked: true, startTime: 43 },
            { id: 3, title: 'Batir la mezcla en la batidora', isCompleted: false, isLocked: true, startTime: 60 },
            { id: 4, title: 'Colocación de la masa en el molde', isCompleted: false, isLocked: true, startTime: 83 },
            { id: 5, title: 'Tiempo de reposo y espolvorear por encima', isCompleted: false, isLocked: true, startTime: 100 },
            { id: 6, title: 'Desmoldar el malvavisco', isCompleted: false, isLocked: true, startTime: 118 },
            { id: 7, title: 'Corte en tiras y cuadrados', isCompleted: false, isLocked: true, startTime: 148 },
            { id: 8, title: 'Cobertura final con azúcar', isCompleted: false, isLocked: true, startTime: 179 }
        ]
    }
];
